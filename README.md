# @trevor-okwirri/nuxt-query

TanStack Query for Nuxt with SSR hydration, a Nuxt-managed query client, and
auto-imported query composables.

## Installation

```bash
pnpm add @trevor-okwirri/nuxt-query
```

Add the module to `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@trevor-okwirri/nuxt-query'],
})
```

The module creates one query client per Nuxt app, transfers prefetched query
state from the server to the browser, and auto-imports the query composables.

## Usage

```vue
<script setup lang="ts">
const { data, status } = useQuery({
  queryKey: ['todos'],
  queryFn: () => $fetch('/api/todos'),
})
</script>

<template>
  <p v-if="status === 'pending'">Loading...</p>
  <pre v-else>{{ data }}</pre>
</template>
```

The following APIs are auto-imported:

- `useQuery`
- `useInfiniteQuery`
- `useQueries`
- `useMutation`
- `useQueryClient`
- `usePrefetchQuery`
- `usePrefetchInfiniteQuery`
- `useIsFetching`
- `useIsMutating`
- `useMutationState`
- `queryOptions`
- `infiniteQueryOptions`
- `mutationOptions`
- `keepPreviousData`

The module also exports the query client, cache classes, composables, and
TanStack Query core types for explicit imports when needed.

## SSR

Queries used during server rendering are dehydrated into Nuxt state and
hydrated into the browser's query client. Query functions should therefore be
safe to execute on the server and should use absolute URLs or server-compatible
fetching when required by the application.

## Local development

```bash
pnpm install
pnpm dev
pnpm test
pnpm check-types
pnpm prepack
```

The `playground` directory is a small Nuxt application used to exercise the
module locally. It is part of this repository only and is not included in the
published package.

## License

MIT
