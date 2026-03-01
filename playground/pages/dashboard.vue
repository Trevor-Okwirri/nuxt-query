<template>
    <div>
        <h1>Dashboard (Protected)</h1>

        <div v-if="isLoading">Loading user...</div>

        <div v-else-if="data?.user">
            <p>Welcome, {{ data.user.name }}!</p>
            <p>Email: {{ data.user.email }}</p>
            <pre>{{ JSON.stringify(data, null, 2) }}</pre>
        </div>

        <div v-else>
            <p>No user data</p>
        </div>

        <NuxtLink to="/">Go Home</NuxtLink>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ['auth']
})

// Uses same queryKey - should be cached from middleware!
const { data, isLoading } = useQuery({
    queryKey: ['current-user'],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
        console.log('[dashboard] Fetching user (should NOT see this if cached!)')
        await new Promise(resolve => setTimeout(resolve, 500))
        return {
            user: {
                id: 1,
                name: 'Test User',
                email: 'test@example.com',
            }
        }
    },
})
</script>