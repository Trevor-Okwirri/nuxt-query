import { isServer } from "@tanstack/query-core";
import { isVue2 } from "vue-demi";
import { QueryClient } from "./queryClient.js";
import { getClientKey } from "./utils.js";
export const VueQueryPlugin = {
  install: (app, options = {}) => {
    const clientKey = getClientKey(options.queryClientKey);
    let client;
    if ("queryClient" in options && options.queryClient) {
      client = options.queryClient;
    } else {
      const clientConfig = "queryClientConfig" in options ? options.queryClientConfig : void 0;
      client = new QueryClient(clientConfig);
    }
    if (!isServer) {
      client.mount();
    }
    let persisterUnmount = () => {
    };
    if (options.clientPersister) {
      if (client.isRestoring) {
        client.isRestoring.value = true;
      }
      const [unmount, promise] = options.clientPersister(client);
      persisterUnmount = unmount;
      promise.then(() => {
        if (client.isRestoring) {
          client.isRestoring.value = false;
        }
        options.clientPersisterOnSuccess?.(client);
      });
    }
    const cleanup = () => {
      client.unmount();
      persisterUnmount();
    };
    if (app.onUnmount) {
      app.onUnmount(cleanup);
    } else {
      const originalUnmount = app.unmount;
      app.unmount = function vueQueryUnmount() {
        cleanup();
        originalUnmount();
      };
    }
    if (isVue2) {
      app.mixin({
        beforeCreate() {
          if (!this._provided) {
            const provideCache = {};
            Object.defineProperty(this, "_provided", {
              get: () => provideCache,
              set: (v) => Object.assign(provideCache, v)
            });
          }
          this._provided[clientKey] = client;
        }
      });
    } else {
      app.provide(clientKey, client);
    }
  }
};
