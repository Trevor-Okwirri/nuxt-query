import type {
  CancelOptions,
  DefaultError,
  DefaultOptions,
  EnsureQueryDataOptions,
  FetchInfiniteQueryOptions,
  FetchQueryOptions,
  InferDataFromTag,
  InferErrorFromTag,
  InfiniteData,
  InvalidateOptions,
  InvalidateQueryFilters,
  MutationFilters,
  MutationKey,
  MutationObserverOptions,
  OmitKeyof,
  QueryFilters,
  QueryKey,
  QueryObserverOptions,
  QueryState,
  RefetchOptions,
  RefetchQueryFilters,
  ResetOptions,
  SetDataOptions,
  Updater,
} from '@tanstack/query-core'
import type { Ref } from 'vue-demi'
import type { UseQueryOptions } from './composables/useQuery'
import type { MaybeRefDeep, NoUnknown, QueryClientConfig } from './types'
import { QueryClient as QC } from '@tanstack/query-core'
import { nextTick, ref } from 'vue-demi'
import { MutationCache } from './mutationCache'
import { QueryCache } from './queryCache'
import { cloneDeepUnref } from './utils'

export class QueryClient extends QC {
  constructor(config: QueryClientConfig = {}) {
    const vueQueryConfig = {
      defaultOptions: config.defaultOptions,
      queryCache: config.queryCache || new QueryCache(),
      mutationCache: config.mutationCache || new MutationCache(),
    }
    super(vueQueryConfig)
  }

  isRestoring?: Ref<boolean> = ref(false)

  override isFetching(filters: MaybeRefDeep<QueryFilters> = {}): number {
    return super.isFetching(cloneDeepUnref(filters))
  }

  override isMutating(filters: MaybeRefDeep<MutationFilters> = {}): number {
    return super.isMutating(cloneDeepUnref(filters))
  }

  override getQueryData<TData = unknown, TTaggedQueryKey extends QueryKey = QueryKey>(
    queryKey: TTaggedQueryKey,
  ): InferDataFromTag<TData, TTaggedQueryKey> | undefined
  override getQueryData<TData = unknown>(queryKey: MaybeRefDeep<QueryKey>): TData | undefined
  override getQueryData<TData = unknown>(queryKey: MaybeRefDeep<QueryKey>): TData | undefined {
    return super.getQueryData(cloneDeepUnref(queryKey))
  }

  override ensureQueryData<
    TQueryFnData,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(options: EnsureQueryDataOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<TData>
  override ensureQueryData<
    TQueryFnData,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    options: MaybeRefDeep<EnsureQueryDataOptions<TQueryFnData, TError, TData, TQueryKey>>,
  ): Promise<TData>
  override ensureQueryData<
    TQueryFnData,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    options: MaybeRefDeep<EnsureQueryDataOptions<TQueryFnData, TError, TData, TQueryKey>>,
  ): Promise<TData> {
    return super.ensureQueryData(cloneDeepUnref(options))
  }

  override getQueriesData<TData = unknown>(
    filters: MaybeRefDeep<QueryFilters>,
  ): Array<[QueryKey, TData | undefined]> {
    return super.getQueriesData(cloneDeepUnref(filters))
  }

  override setQueryData<
    TQueryFnData = unknown,
    TTaggedQueryKey extends QueryKey = QueryKey,
    TInferredQueryFnData = InferDataFromTag<TQueryFnData, TTaggedQueryKey>,
  >(
    queryKey: TTaggedQueryKey,
    updater: Updater<
      NoInfer<TInferredQueryFnData> | undefined,
      NoInfer<TInferredQueryFnData> | undefined
    >,
    options?: MaybeRefDeep<SetDataOptions>,
  ): NoInfer<TInferredQueryFnData> | undefined
  override setQueryData<TQueryFnData, TData = NoUnknown<TQueryFnData>>(
    queryKey: MaybeRefDeep<QueryKey>,
    updater: Updater<NoInfer<TData> | undefined, NoInfer<TData> | undefined>,
    options?: MaybeRefDeep<SetDataOptions>,
  ): NoInfer<TData> | undefined
  override setQueryData<TData>(
    queryKey: MaybeRefDeep<QueryKey>,
    updater: Updater<TData | undefined, TData | undefined>,
    options: MaybeRefDeep<SetDataOptions> = {},
  ): NoInfer<TData> | undefined {
    return super.setQueryData<TData>(cloneDeepUnref(queryKey), updater, cloneDeepUnref(options))
  }

  override setQueriesData<TData>(
    filters: MaybeRefDeep<QueryFilters>,
    updater: Updater<TData | undefined, TData | undefined>,
    options: MaybeRefDeep<SetDataOptions> = {},
  ): Array<[QueryKey, TData | undefined]> {
    return super.setQueriesData(cloneDeepUnref(filters), updater, cloneDeepUnref(options))
  }

  override getQueryState<TData = unknown, TError = DefaultError>(
    queryKey: MaybeRefDeep<QueryKey>,
  ): QueryState<TData, TError> | undefined {
    return super.getQueryState(cloneDeepUnref(queryKey))
  }

  override removeQueries<
    TQueryFnData = unknown,
    TError = DefaultError,
    TTaggedQueryKey extends QueryKey = QueryKey,
    TInferredQueryFnData = InferDataFromTag<TQueryFnData, TTaggedQueryKey>,
    TInferredError = InferErrorFromTag<TError, TTaggedQueryKey>,
  >(filters?: QueryFilters<TTaggedQueryKey>): void
  override removeQueries(filters: MaybeRefDeep<QueryFilters> = {}): void {
    return super.removeQueries(cloneDeepUnref(filters))
  }

  override resetQueries<
    TQueryFnData = unknown,
    TError = DefaultError,
    TTaggedQueryKey extends QueryKey = QueryKey,
    TInferredQueryFnData = InferDataFromTag<TQueryFnData, TTaggedQueryKey>,
    TInferredError = InferErrorFromTag<TError, TTaggedQueryKey>,
  >(filters?: QueryFilters<TTaggedQueryKey>, options?: MaybeRefDeep<ResetOptions>): Promise<void>
  override resetQueries(
    filters: MaybeRefDeep<QueryFilters> = {},
    options: MaybeRefDeep<ResetOptions> = {},
  ): Promise<void> {
    return super.resetQueries(cloneDeepUnref(filters), cloneDeepUnref(options))
  }

  override cancelQueries<
    TQueryFnData = unknown,
    TError = DefaultError,
    TTaggedQueryKey extends QueryKey = QueryKey,
    TInferredQueryFnData = InferDataFromTag<TQueryFnData, TTaggedQueryKey>,
    TInferredError = InferErrorFromTag<TError, TTaggedQueryKey>,
  >(filters?: QueryFilters<TTaggedQueryKey>, options?: MaybeRefDeep<CancelOptions>): Promise<void>
  override cancelQueries(
    filters: MaybeRefDeep<QueryFilters> = {},
    options: MaybeRefDeep<CancelOptions> = {},
  ): Promise<void> {
    return super.cancelQueries(cloneDeepUnref(filters), cloneDeepUnref(options))
  }

  override invalidateQueries<
    TQueryFnData = unknown,
    TError = DefaultError,
    TTaggedQueryKey extends QueryKey = QueryKey,
    TInferredQueryFnData = InferDataFromTag<TQueryFnData, TTaggedQueryKey>,
    TInferredError = InferErrorFromTag<TError, TTaggedQueryKey>,
  >(
    filters?:
      InvalidateQueryFilters<TTaggedQueryKey> | (() => InvalidateQueryFilters<TTaggedQueryKey>),
    options?: MaybeRefDeep<InvalidateOptions>,
  ): Promise<void>
  override invalidateQueries<TTaggedQueryKey extends QueryKey = QueryKey>(
    filters:
      | MaybeRefDeep<InvalidateQueryFilters<TTaggedQueryKey>>
      | (() => InvalidateQueryFilters<TTaggedQueryKey>) = {},
    options: MaybeRefDeep<InvalidateOptions> | (() => InvalidateOptions) = {},
  ): Promise<void> {
    const filtersCloned = cloneDeepUnref(
      filters as MaybeRefDeep<InvalidateQueryFilters<TTaggedQueryKey>>,
    )
    const optionsCloned = cloneDeepUnref(options as MaybeRefDeep<InvalidateOptions>)

    super.invalidateQueries({ ...filtersCloned, refetchType: 'none' }, optionsCloned)

    if (filtersCloned.refetchType === 'none') {
      return Promise.resolve()
    }

    const refetchFilters: RefetchQueryFilters<TTaggedQueryKey> = {
      ...filtersCloned,
      type: filtersCloned.refetchType ?? filtersCloned.type ?? 'active',
    }

    // (dosipiuk): We need to delay `refetchQueries` execution to next macro task for all reactive values to be updated.
    // This ensures that `context` in `queryFn` while `invalidating` along reactive variable change has correct
    return nextTick().then(() => {
      return super.refetchQueries(refetchFilters, optionsCloned)
    })
  }

  override refetchQueries<
    TQueryFnData = unknown,
    TError = DefaultError,
    TTaggedQueryKey extends QueryKey = QueryKey,
    TInferredQueryFnData = InferDataFromTag<TQueryFnData, TTaggedQueryKey>,
    TInferredError = InferErrorFromTag<TError, TTaggedQueryKey>,
  >(
    filters?: RefetchQueryFilters<TTaggedQueryKey>,
    options?: MaybeRefDeep<RefetchOptions>,
  ): Promise<void>
  override refetchQueries(
    filters: MaybeRefDeep<RefetchQueryFilters> = {},
    options: MaybeRefDeep<RefetchOptions> = {},
  ): Promise<void> {
    return super.refetchQueries(cloneDeepUnref(filters), cloneDeepUnref(options))
  }

  override fetchQuery<
    TQueryFnData,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = never,
  >(options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>): Promise<TData>
  override fetchQuery<
    TQueryFnData,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = never,
  >(
    options:
      | MaybeRefDeep<FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>>
      | (() => FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>),
  ): Promise<TData>
  override fetchQuery<
    TQueryFnData,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = never,
  >(
    options: MaybeRefDeep<FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>>,
  ): Promise<TData> {
    return super.fetchQuery(cloneDeepUnref(options))
  }

  override prefetchQuery<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<void>
  override prefetchQuery<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(options: MaybeRefDeep<FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>>): Promise<void>
  override prefetchQuery<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    options: MaybeRefDeep<FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>>,
  ): Promise<void> {
    return super.prefetchQuery(cloneDeepUnref(options))
  }

  override fetchInfiniteQuery<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown,
  >(
    options: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>,
  ): Promise<InfiniteData<TData, TPageParam>>
  override fetchInfiniteQuery<
    TQueryFnData,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown,
  >(
    options: MaybeRefDeep<
      FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>
    >,
  ): Promise<InfiniteData<TData, TPageParam>>
  override fetchInfiniteQuery<
    TQueryFnData,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown,
  >(
    options: MaybeRefDeep<
      FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>
    >,
  ): Promise<InfiniteData<TData, TPageParam>> {
    return super.fetchInfiniteQuery(cloneDeepUnref(options))
  }

  override prefetchInfiniteQuery<
    TQueryFnData,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown,
  >(
    options: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>,
  ): Promise<void>
  override prefetchInfiniteQuery<
    TQueryFnData,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown,
  >(
    options: MaybeRefDeep<
      FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>
    >,
  ): Promise<void>
  override prefetchInfiniteQuery<
    TQueryFnData,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown,
  >(
    options: MaybeRefDeep<
      FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>
    >,
  ): Promise<void> {
    return super.prefetchInfiniteQuery(cloneDeepUnref(options))
  }

  override setDefaultOptions(options: MaybeRefDeep<DefaultOptions>): void {
    super.setDefaultOptions(cloneDeepUnref(options))
  }

  override setQueryDefaults<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryData = TQueryFnData,
  >(
    queryKey: MaybeRefDeep<QueryKey>,
    options: MaybeRefDeep<
      Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryData>, 'queryKey'>
    >,
  ): void {
    super.setQueryDefaults(cloneDeepUnref(queryKey), cloneDeepUnref(options))
  }

  override getQueryDefaults(
    queryKey: MaybeRefDeep<QueryKey>,
  ): OmitKeyof<QueryObserverOptions<any, any, any, any, any>, 'queryKey'> {
    return super.getQueryDefaults(cloneDeepUnref(queryKey))
  }

  override setMutationDefaults<
    TData = unknown,
    TError = DefaultError,
    TVariables = void,
    TOnMutateResult = unknown,
  >(
    mutationKey: MaybeRefDeep<MutationKey>,
    options: MaybeRefDeep<MutationObserverOptions<TData, TError, TVariables, TOnMutateResult>>,
  ): void {
    super.setMutationDefaults(cloneDeepUnref(mutationKey), cloneDeepUnref(options))
  }

  override getMutationDefaults(
    mutationKey: MaybeRefDeep<MutationKey>,
  ): MutationObserverOptions<any, any, any, any> {
    return super.getMutationDefaults(cloneDeepUnref(mutationKey))
  }
}
