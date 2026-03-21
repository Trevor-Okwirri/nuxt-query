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
export { useQueryClient } from './composables/useQueryClient'
export { infiniteQueryOptions } from './infiniteQueryOptions'
export type {
  DefinedInitialDataInfiniteOptions,
  UndefinedInitialDataInfiniteOptions,
} from './infiniteQueryOptions'
export { MutationCache } from './mutationCache'

export { QueryCache } from './queryCache'
export { QueryClient } from './queryClient'
export { queryOptions } from './queryOptions'
export { VUE_QUERY_CLIENT } from './utils'
export { VueQueryPlugin } from './vueQueryPlugin'
export type { VueQueryPluginOptions } from './vueQueryPlugin'
export * from '@tanstack/query-core'
