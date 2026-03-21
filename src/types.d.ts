import type { QueryClient } from './queryClient'

declare module '#app' {
  interface NuxtApp {
    $queryClient: QueryClient
  }
}
