export default defineNuxtRouteMiddleware(async (to) => {
  console.log('[middleware] Running auth check for:', to.path)

  const { data, suspense } = useQuery({
    queryKey: ['current-user'],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      console.log('[middleware] Fetching user...')

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))

      // Return mock user (change to null to test redirect)
      return {
        user: {
          id: 1,
          name: 'Test User',
          email: 'test@example.com',
        },
      }
    },
  })

  await suspense()

  console.log('[middleware] User data:', data.value)

  if (!data.value?.user) {
    console.log('[middleware] No user, redirecting to login')
    return navigateTo('/login')
  }

  console.log('[middleware] User authenticated!')
})
