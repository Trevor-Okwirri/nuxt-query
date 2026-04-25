import { QueryCache as QC } from "@tanstack/query-core";
import { cloneDeepUnref } from "./utils.js";
export class QueryCache extends QC {
  find(filters) {
    return super.find(cloneDeepUnref(filters));
  }
  findAll(filters = {}) {
    return super.findAll(cloneDeepUnref(filters));
  }
}
