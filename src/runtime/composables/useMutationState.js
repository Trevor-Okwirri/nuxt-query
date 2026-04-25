import {
  computed,
  getCurrentScope,
  onScopeDispose,
  shallowReadonly,
  shallowRef,
  watch
} from "vue-demi";
import { cloneDeepUnref } from "../utils.js";
import { useQueryClient } from "./useQueryClient.js";
export function useIsMutating(filters = {}, queryClient) {
  if (process.env.NODE_ENV === "development") {
    if (!getCurrentScope()) {
      console.warn(
        'vue-query composable like "useQuery()" should only be used inside a "setup()" function or a running effect scope. They might otherwise lead to memory leaks.'
      );
    }
  }
  const client = queryClient || useQueryClient();
  const mutationState = useMutationState(
    {
      filters: computed(() => ({
        ...cloneDeepUnref(typeof filters === "function" ? filters() : filters),
        status: "pending"
      }))
    },
    client
  );
  const length = computed(() => mutationState.value.length);
  return length;
}
function getResult(mutationCache, options) {
  return mutationCache.findAll(options.filters).map(
    (mutation) => options.select ? options.select(mutation) : mutation.state
  );
}
export function useMutationState(options = {}, queryClient) {
  const resolvedOptions = computed(() => {
    const newOptions = typeof options === "function" ? options() : options;
    return {
      filters: cloneDeepUnref(newOptions.filters),
      select: newOptions.select
    };
  });
  const mutationCache = (queryClient || useQueryClient()).getMutationCache();
  const state = shallowRef(getResult(mutationCache, resolvedOptions.value));
  const unsubscribe = mutationCache.subscribe(() => {
    state.value = getResult(mutationCache, resolvedOptions.value);
  });
  watch(resolvedOptions, () => {
    state.value = getResult(mutationCache, resolvedOptions.value);
  });
  onScopeDispose(() => {
    unsubscribe();
  });
  return shallowReadonly(state);
}
