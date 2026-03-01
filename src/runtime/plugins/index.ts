import { type DehydratedState, hydrate, dehydrate } from '@tanstack/query-core'
import { VueQueryPlugin, type VueQueryPluginOptions } from '../vueQueryPlugin'
import { QueryClient } from '../queryClient'
import { defineNuxtPlugin, useState } from '#imports'

export default defineNuxtPlugin((nuxt) => {
  const vueQueryState = useState<DehydratedState | null>('nuxt-query')

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
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
      hydrate(queryClient, vueQueryState.value)
    })


    ;(window as any).__TANSTACK_QUERY_CLIENT__ = queryClient

  }

  return {
    provide: {
      queryClient,
    },
  }
})
