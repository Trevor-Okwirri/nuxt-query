import { getQueryClient } from '../context'
import type { QueryClient } from '../queryClient'

export function useQueryClient(): QueryClient {
  return getQueryClient()
}