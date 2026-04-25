import { MutationCache as MC } from "@tanstack/query-core";
import { cloneDeepUnref } from "./utils.js";
export class MutationCache extends MC {
  find(filters) {
    return super.find(cloneDeepUnref(filters));
  }
  findAll(filters = {}) {
    return super.findAll(cloneDeepUnref(filters));
  }
}
