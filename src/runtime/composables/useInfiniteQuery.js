import { InfiniteQueryObserver } from "@tanstack/query-core";
import { useBaseQuery } from "./useBaseQuery.js";
export function useInfiniteQuery(options, queryClient) {
  return useBaseQuery(
    InfiniteQueryObserver,
    options,
    queryClient
  );
}
