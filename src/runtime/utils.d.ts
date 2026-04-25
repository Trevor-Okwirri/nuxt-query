import type { MaybeRefDeep } from './types.js';
export declare const VUE_QUERY_CLIENT = "VUE_QUERY_CLIENT";
export declare function getClientKey(key?: string): string;
export declare function updateState(state: Record<string, any>, update: Record<string, any>): void;
export declare function cloneDeep<T>(value: MaybeRefDeep<T>, customize?: (val: MaybeRefDeep<T>, key: string, level: number) => T | undefined): T;
export declare function cloneDeepUnref<T>(obj: MaybeRefDeep<T>, unrefGetters?: boolean): T;
