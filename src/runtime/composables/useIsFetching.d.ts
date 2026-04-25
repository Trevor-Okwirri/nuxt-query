import type { QueryFilters as QF } from '@tanstack/query-core';
import type { Ref } from 'vue-demi';
import type { QueryClient } from '../queryClient.js';
import type { MaybeRefDeep } from '../types.js';
export type QueryFilters = MaybeRefDeep<QF> | (() => MaybeRefDeep<QF>);
export declare function useIsFetching(fetchingFilters?: QueryFilters, queryClient?: QueryClient): Ref<number>;
