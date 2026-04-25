import { QueryObserver } from "@tanstack/query-core";
import { useBaseQuery } from "./useBaseQuery.js";
export function useQuery(options, queryClient) {
  return useBaseQuery(QueryObserver, options, queryClient);
}
