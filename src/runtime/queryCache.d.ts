import type { DefaultError, Query, QueryFilters, WithRequired } from '@tanstack/query-core';
import type { MaybeRefDeep } from './types.js';
import { QueryCache as QC } from '@tanstack/query-core';
export declare class QueryCache extends QC {
    find<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData>(filters: MaybeRefDeep<WithRequired<QueryFilters, 'queryKey'>>): Query<TQueryFnData, TError, TData> | undefined;
    findAll(filters?: MaybeRefDeep<QueryFilters>): Array<Query>;
}
