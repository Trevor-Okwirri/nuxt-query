export function getQueryClient() {
  const { $queryClient: client } = useNuxtApp();
  if (!client) {
    throw new Error(
      "[nuxt-query] No QueryClient found. Ensure the module is installed."
    );
  }
  return client;
}
