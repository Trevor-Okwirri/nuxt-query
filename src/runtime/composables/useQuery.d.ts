import type { DefaultError, DefinedQueryObserverResult, Enabled, InitialDataFunction, NonUndefinedGuard, QueryKey, QueryObserverOptions } from '@tanstack/query-core';
import type { QueryClient } from '../queryClient.js';
import type { DeepUnwrapRef, MaybeRef, MaybeRefDeep, MaybeRefOrGetter, ShallowOption } from '../types.js';
import type { UseBaseQueryReturnType } from './useBaseQuery.js';
export type UseQueryOptions<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = MaybeRef<{
    [Property in keyof QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>]: Property extends 'enabled' ? MaybeRefOrGetter<boolean | undefined> | (() => Enabled<TQueryFnData, TError, TQueryData, DeepUnwrapRef<TQueryKey>>) : MaybeRefDeep<QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, DeepUnwrapRef<TQueryKey>>[Property]>;
} & ShallowOption>;
export type UndefinedInitialQueryOptions<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = UseQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey> & {
    initialData?: undefined | InitialDataFunction<NonUndefinedGuard<TQueryFnData>> | NonUndefinedGuard<TQueryFnData>;
};
export type DefinedInitialQueryOptions<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = UseQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey> & {
    initialData: NonUndefinedGuard<TQueryFnData> | (() => NonUndefinedGuard<TQueryFnData>);
};
export type UseQueryReturnType<TData, TError> = UseBaseQueryReturnType<TData, TError>;
export type UseQueryDefinedReturnType<TData, TError> = UseBaseQueryReturnType<TData, TError, DefinedQueryObserverResult<TData, TError>>;
export declare function useQuery<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: DefinedInitialQueryOptions<TQueryFnData, TError, TData, TQueryKey>, queryClient?: QueryClient): UseQueryDefinedReturnType<TData, TError>;
export declare function useQuery<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: UndefinedInitialQueryOptions<TQueryFnData, TError, TData, TQueryKey>, queryClient?: QueryClient): UseQueryReturnType<TData, TError>;
export declare function useQuery<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: MaybeRefOrGetter<UseQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>>, queryClient?: QueryClient): UseQueryReturnType<TData, TError>;
