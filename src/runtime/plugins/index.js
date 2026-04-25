import { defineNuxtPlugin, useState } from "#imports";
import { dehydrate, hydrate } from "@tanstack/query-core";
import { QueryClient } from "../queryClient.js";
import { VueQueryPlugin } from "../vueQueryPlugin.js";
export default defineNuxtPlugin((nuxt) => {
  const vueQueryState = useState("nuxt-query");
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5e3
      }
    }
  });
  const options = { queryClient };
  nuxt.vueApp.use(VueQueryPlugin, options);
  if (import.meta.server) {
    nuxt.hooks.hook("app:rendered", () => {
      vueQueryState.value = dehydrate(queryClient);
    });
  }
  if (import.meta.client) {
    nuxt.hooks.hook("app:created", () => {
      hydrate(queryClient, vueQueryState.value);
    });
    window.__TANSTACK_QUERY_CLIENT__ = queryClient;
  }
  return {
    provide: {
      queryClient
    }
  };
});
