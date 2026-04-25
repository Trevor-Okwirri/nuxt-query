import type { QueryFilters as QF } from '@tanstack/query-core'
import type { Ref } from 'vue-demi'
import type { QueryClient } from '../queryClient'
import type { MaybeRefDeep } from '../types'
import { getCurrentScope, onScopeDispose, ref, watchEffect } from 'vue-demi'
import { cloneDeepUnref } from '../utils'
import { useQueryClient } from './useQueryClient'

export type QueryFilters = MaybeRefDeep<QF> | (() => MaybeRefDeep<QF>)

export function useIsFetching(
  fetchingFilters: QueryFilters = {},
  queryClient?: QueryClient,
): Ref<number> {
  if (process.env.NODE_ENV === 'development') {
    if (!getCurrentScope()) {
      console.warn(
        'vue-query composable like "useQuery()" should only be used inside a "setup()" function or a running effect scope. They might otherwise lead to memory leaks.',
      )
    }
  }

  const client = queryClient || useQueryClient()

  const isFetching = ref()

  const listener = () => {
    const resolvedFilters =
      typeof fetchingFilters === 'function'
        ? fetchingFilters()
        : fetchingFilters
    isFetching.value = client.isFetching(cloneDeepUnref(resolvedFilters))
  }

  const unsubscribe = client.getQueryCache().subscribe(listener)

  watchEffect(listener)

  onScopeDispose(() => {
    unsubscribe()
  })

  return isFetching
}
