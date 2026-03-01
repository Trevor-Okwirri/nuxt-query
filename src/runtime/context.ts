import type { QueryClient } from './queryClient'

export function getQueryClient(): QueryClient {

    const { $queryClient: client } = useNuxtApp()

    if (!client) {
        throw new Error(
            '[nuxt-query] No QueryClient found. Ensure the module is installed.'
        )
    }

    return client
}
