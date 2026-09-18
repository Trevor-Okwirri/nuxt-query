import type {
  DefaultError,
  Mutation,
  MutationFilters,
} from '@tanstack/query-core'
import type { MaybeRefDeep } from './types'
import { MutationCache as MC } from '@tanstack/query-core'
import { cloneDeepUnref } from './utils'

export class MutationCache extends MC {
  override find<
    TData = unknown,
    TError = DefaultError,
    TVariables = any,
    TOnMutateResult = unknown,
  >(
    filters: MaybeRefDeep<MutationFilters>,
  ): Mutation<TData, TError, TVariables, TOnMutateResult> | undefined {
    return super.find(cloneDeepUnref(filters))
  }

  override findAll(filters: MaybeRefDeep<MutationFilters> = {}): Array<Mutation> {
    return super.findAll(cloneDeepUnref(filters))
  }
}
