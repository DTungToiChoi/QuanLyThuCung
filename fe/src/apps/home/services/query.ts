import { useQuery, type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'
import type { IResponsePagination } from '../../../shared/types/response.type'
import { getDichVu } from './api'
import type { IDichVu, TFilter } from './types'

export const useDichVuQuery = (
  params: TFilter,
  options?: UseQueryOptions<IResponsePagination<IDichVu>>
): UseQueryResult<IResponsePagination<IDichVu>> => {
  return useQuery({
    queryKey: ['dich-vu', params],
    queryFn: () => getDichVu(params),
    ...options,
  })
}

