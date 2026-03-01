import { defineNuxtModule, addPlugin, createResolver, addImportsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@repo/nuxt-query',
    configKey: 'nuxtQuery',
  },
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    addPlugin(resolver.resolve('./runtime/plugins'))

    addImportsDir(resolver.resolve('./runtime/composables'))
  },
})
