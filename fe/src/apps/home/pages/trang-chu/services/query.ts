import { useQuery, type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query';
import type { TFilter } from './types';
import { getDichVu } from './api';

export const useDichVuQuery = (
  params: TFilter,
  options?: UseQueryOptions<any>
): UseQueryResult<any> => {
  return useQuery({
    queryKey: ['dich-vu', params],
    queryFn: () => getDichVu(params),
    ...options,
  });
};

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
