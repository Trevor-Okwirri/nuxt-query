import type { QueryClient } from '../queryClient'
import { getQueryClient } from '../context'

export function useQueryClient(): QueryClient {
  return getQueryClient()
}
