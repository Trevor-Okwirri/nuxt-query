export { useInfiniteQuery } from './composables/useInfiniteQuery'

export type {
  UseInfiniteQueryOptions,
  UseInfiniteQueryReturnType,
} from './composables/useInfiniteQuery'
export { useIsFetching } from './composables/useIsFetching'

export type { QueryFilters } from './composables/useIsFetching'
export { useMutation } from './composables/useMutation'
export type { UseMutationOptions, UseMutationReturnType } from './composables/useMutation'
export { useIsMutating, useMutationState } from './composables/useMutationState'
export type { MutationFilters, MutationStateOptions } from './composables/useMutationState'
export { usePrefetchInfiniteQuery } from './composables/usePrefetchInfiniteQuery'
export type { UsePrefetchInfiniteQueryOptions } from './composables/usePrefetchInfiniteQuery'
export { usePrefetchQuery } from './composables/usePrefetchQuery'
export type { UsePrefetchQueryOptions } from './composables/usePrefetchQuery'
export { useQueries } from './composables/useQueries'
export type { UseQueriesOptions, UseQueriesResults } from './composables/useQueries'
export { useQuery } from './composables/useQuery'
export type {
  DefinedInitialQueryOptions,
  UndefinedInitialQueryOptions,
  UseQueryDefinedReturnType,
  UseQueryOptions,
  UseQueryReturnType,
} from './composables/useQuery'
export type { UseQueryOptions as QueryOptions } from './composables/useQuery'
export { useQueryClient } from './composables/useQueryClient'
export { infiniteQueryOptions } from './infiniteQueryOptions'
export type {
  DefinedInitialDataInfiniteOptions,
  UndefinedInitialDataInfiniteOptions,
} from './infiniteQueryOptions'

export { MutationCache } from './mutationCache'
export { mutationOptions } from './mutationOptions'
export { QueryCache } from './queryCache'
export { QueryClient } from './queryClient'
export { queryOptions } from './queryOptions'
export type { MutationOptions } from './types'
export { VUE_QUERY_CLIENT } from './utils'
export { VueQueryPlugin } from './vueQueryPlugin'
export type { VueQueryPluginOptions } from './vueQueryPlugin'
export * from '@tanstack/query-core'
