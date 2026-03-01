export * from '@tanstack/query-core'

export { useQueryClient } from './composables/useQueryClient'
export { VueQueryPlugin } from './vueQueryPlugin'

export { QueryClient } from './queryClient'
export { QueryCache } from './queryCache'
export { queryOptions } from './queryOptions'
export { infiniteQueryOptions } from './infiniteQueryOptions'
export type {
  DefinedInitialDataInfiniteOptions,
  UndefinedInitialDataInfiniteOptions,
} from './infiniteQueryOptions'
export { MutationCache } from './mutationCache'
export { useQuery } from './composables/useQuery'
export { useQueries } from './composables/useQueries'
export { useInfiniteQuery } from './composables/useInfiniteQuery'
export { useMutation } from './composables/useMutation'
export { useIsFetching } from './composables/useIsFetching'
export { useIsMutating, useMutationState } from './composables/useMutationState'
export { VUE_QUERY_CLIENT } from './utils'

export type {
  UseQueryOptions,
  UseQueryReturnType,
  UseQueryDefinedReturnType,
  UndefinedInitialQueryOptions,
  DefinedInitialQueryOptions,
} from './composables/useQuery'
export type {
  UseInfiniteQueryOptions,
  UseInfiniteQueryReturnType,
} from './composables/useInfiniteQuery'
export type { UseMutationOptions, UseMutationReturnType } from './composables/useMutation'
export type { UseQueriesOptions, UseQueriesResults } from './composables/useQueries'
export type { MutationFilters, MutationStateOptions } from './composables/useMutationState'
export type { QueryFilters } from './composables/useIsFetching'
export type { VueQueryPluginOptions } from './vueQueryPlugin'
