<script setup lang="ts">
import type { TanStackDevtoolsVuePlugin } from '@tanstack/vue-devtools'
import { TanStackDevtools } from '@tanstack/vue-devtools'
import { VueQueryDevtoolsPanel } from '@tanstack/vue-query-devtools'

const plugins: TanStackDevtoolsVuePlugin[] = [
  { name: 'Vue Query', component: VueQueryDevtoolsPanel },
]

const isDev = import.meta.dev
</script>

<template>
  <ClientOnly>
    <TanStackDevtools v-if="isDev" :plugins="plugins" />
  </ClientOnly>
</template>
