import { useQuery, type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'
import type { IResponsePagination } from '../../../../../shared/types/response.type'
import { getDichVu } from './api'
import type { IDichVu, TFilter } from './types'

export const useDichVuQuery = (
  params: TFilter,
  options?: Omit<UseQueryOptions<IResponsePagination<IDichVu>>, 'queryKey' | 'queryFn'>
): UseQueryResult<IResponsePagination<IDichVu>> => {
  return useQuery({
    queryKey: ['dich-vu', params],
    queryFn: () => getDichVu(params),
    ...options,
  })
}

// export const useDetailCoQuanQuanLyQuery = (
//   id?: number,
//   options?: UseQueryOptions<any>
// ): UseQueryResult<any> => {
//   return useQuery({
//     queryKey: ['co-quan-detail', id],
//     queryFn: () => getDetailCoQuanQuanLy(id!),
//     enabled: !!id,
//     select: (res: IResponse<IDetailCoQuanQuanLy>) => res.data,
//     ...options,
//   });
// };
