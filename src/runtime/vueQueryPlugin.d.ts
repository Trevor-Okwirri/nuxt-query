import type { QueryClientConfig } from './types.js';
import { QueryClient } from './queryClient.js';
type ClientPersister = (client: QueryClient) => [() => void, Promise<void>];
interface CommonOptions {
    queryClientKey?: string;
    clientPersister?: ClientPersister;
    clientPersisterOnSuccess?: (client: QueryClient) => void;
}
interface ConfigOptions extends CommonOptions {
    queryClientConfig?: QueryClientConfig;
}
interface ClientOptions extends CommonOptions {
    queryClient?: QueryClient;
}
export type VueQueryPluginOptions = ConfigOptions | ClientOptions;
export declare const VueQueryPlugin: {
    install: (app: any, options?: VueQueryPluginOptions) => void;
};
export {};
