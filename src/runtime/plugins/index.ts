import type { DehydratedState } from '@tanstack/query-core'
import type { VueQueryPluginOptions } from '../vueQueryPlugin'
import { defineNuxtPlugin, useState } from '#imports'
import { dehydrate, hydrate, keepPreviousData } from '@tanstack/query-core'
import { QueryClient } from '../queryClient'
import { VueQueryPlugin } from '../vueQueryPlugin'

export default defineNuxtPlugin((nuxt) => {
  const vueQueryState = useState<DehydratedState | null>('nuxt-query')

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // 60 seconds: long enough to survive SSR→client hydration without
        // triggering immediate background refetches, short enough that
        // dynamic data (orders, products) still refreshes on user navigation.
        // Long-lived data (translations, locales, nav menus) overrides this
        // with per-query staleTime: 24 hours.
        staleTime: 60_000,
        // Admins tab-switch constantly; refetching every query on window
        // focus caused visible dashboard/chart flicker. staleTime already
        // governs freshness — rely on that instead of focus-triggered refetch.
        refetchOnWindowFocus: false,
        // Charts/stats keyed by filters (date range, territory, etc.) would
        // otherwise flash to their empty state on every key change while the
        // new key's data is fetched. Keep the previous key's data on screen
        // until the new one resolves; isFetching still flips for a spinner.
        placeholderData: keepPreviousData,
      },
    },
  })

  const options: VueQueryPluginOptions = { queryClient }

  nuxt.vueApp.use(VueQueryPlugin, options)

  if (import.meta.server) {
    nuxt.hooks.hook('app:rendered', () => {
      vueQueryState.value = dehydrate(queryClient)
    })
  }

  if (import.meta.client) {
    nuxt.hooks.hook('app:created', () => {
      if (vueQueryState.value) hydrate(queryClient, vueQueryState.value)
    })

    ;(window as any).__TANSTACK_QUERY_CLIENT__ = queryClient
  }

  return {
    provide: {
      queryClient,
    },
  }
})
