import type { DefaultError, Mutation, MutationFilters } from '@tanstack/query-core';
import type { MaybeRefDeep } from './types.js';
import { MutationCache as MC } from '@tanstack/query-core';
export declare class MutationCache extends MC {
    find<TData = unknown, TError = DefaultError, TVariables = any, TOnMutateResult = unknown>(filters: MaybeRefDeep<MutationFilters>): Mutation<TData, TError, TVariables, TOnMutateResult> | undefined;
    findAll(filters?: MaybeRefDeep<MutationFilters>): Array<Mutation>;
}
