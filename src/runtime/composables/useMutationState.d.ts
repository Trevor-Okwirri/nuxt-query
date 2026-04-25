import type { MutationFilters as MF, Mutation, MutationState } from '@tanstack/query-core';
import type { Ref } from 'vue-demi';
import type { QueryClient } from '../queryClient.js';
import type { MaybeRefDeep } from '../types.js';
export type MutationFilters = MaybeRefDeep<MF>;
export declare function useIsMutating(filters?: MutationFilters | (() => MutationFilters), queryClient?: QueryClient): Ref<number>;
export interface MutationStateOptions<TResult = MutationState> {
    filters?: MutationFilters;
    select?: (mutation: Mutation) => TResult;
}
export declare function useMutationState<TResult = MutationState>(options?: MutationStateOptions<TResult> | (() => MutationStateOptions<TResult>), queryClient?: QueryClient): Readonly<Ref<Array<TResult>>>;
