import { addImports, addImportsDir, addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@repo/nuxt-query',
    configKey: 'nuxtQuery',
  },
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    addPlugin(resolver.resolve('./runtime/plugins/index.ts'))

    addImportsDir(resolver.resolve('./runtime/composables'))

    addImports([
      { name: 'queryOptions', from: resolver.resolve('./runtime/queryOptions') },
      { name: 'keepPreviousData', from: '@tanstack/query-core' },
    ])
  },
})

export * from './runtime/index'
