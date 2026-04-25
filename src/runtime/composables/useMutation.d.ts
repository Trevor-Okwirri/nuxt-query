import type { DefaultError, DistributiveOmit, MutateFunction, MutationObserverOptions, MutationObserverResult } from '@tanstack/query-core';
import type { ToRefs } from 'vue-demi';
import type { QueryClient } from '../queryClient.js';
import type { MaybeRefDeep, ShallowOption } from '../types.js';
type MutationResult<TData, TError, TVariables, TOnMutateResult> = DistributiveOmit<MutationObserverResult<TData, TError, TVariables, TOnMutateResult>, 'mutate' | 'reset'>;
type UseMutationOptionsBase<TData, TError, TVariables, TOnMutateResult> = MutationObserverOptions<TData, TError, TVariables, TOnMutateResult> & ShallowOption;
export type UseMutationOptions<TData = unknown, TError = DefaultError, TVariables = void, TOnMutateResult = unknown> = MaybeRefDeep<UseMutationOptionsBase<TData, TError, TVariables, TOnMutateResult>> | (() => MaybeRefDeep<UseMutationOptionsBase<TData, TError, TVariables, TOnMutateResult>>);
type MutateSyncFunction<TData = unknown, TError = DefaultError, TVariables = void, TOnMutateResult = unknown> = (...options: Parameters<MutateFunction<TData, TError, TVariables, TOnMutateResult>>) => void;
export type UseMutationReturnType<TData, TError, TVariables, TOnMutateResult, TResult = MutationResult<TData, TError, TVariables, TOnMutateResult>> = ToRefs<Readonly<TResult>> & {
    mutate: MutateSyncFunction<TData, TError, TVariables, TOnMutateResult>;
    mutateAsync: MutateFunction<TData, TError, TVariables, TOnMutateResult>;
    reset: MutationObserverResult<TData, TError, TVariables, TOnMutateResult>['reset'];
};
export declare function useMutation<TData = unknown, TError = DefaultError, TVariables = void, TOnMutateResult = unknown>(mutationOptions: UseMutationOptions<TData, TError, TVariables, TOnMutateResult>, queryClient?: QueryClient): UseMutationReturnType<TData, TError, TVariables, TOnMutateResult>;
export {};
