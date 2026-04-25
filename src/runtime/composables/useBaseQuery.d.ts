import type { QueryKey, QueryObserver, QueryObserverResult } from '@tanstack/query-core';
import type { Ref } from 'vue-demi';
import type { QueryClient } from '../queryClient.js';
import type { MaybeRefOrGetter } from '../types.js';
import type { UseInfiniteQueryOptions } from './useInfiniteQuery.js';
import type { UseQueryOptions } from './useQuery.js';
export type UseBaseQueryReturnType<TData, TError, TResult = QueryObserverResult<TData, TError>> = {
    [K in keyof TResult]: K extends 'fetchNextPage' | 'fetchPreviousPage' | 'refetch' ? TResult[K] : Ref<Readonly<TResult>[K]>;
} & {
    suspense: () => Promise<TResult>;
};
type UseQueryOptionsGeneric<TQueryFnData, TError, TData, TQueryData, TQueryKey extends QueryKey = QueryKey, TPageParam = unknown> = UseQueryOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey> | UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>;
export declare function useBaseQuery<TQueryFnData, TError, TData, TQueryData, TQueryKey extends QueryKey, TPageParam>(Observer: typeof QueryObserver, options: MaybeRefOrGetter<UseQueryOptionsGeneric<TQueryFnData, TError, TData, TQueryData, TQueryKey, TPageParam>>, queryClient?: QueryClient): UseBaseQueryReturnType<TData, TError>;
export {};
