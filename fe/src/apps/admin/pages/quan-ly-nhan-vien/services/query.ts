import { useQuery, type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'
import { getTaiKhoanNhanVien, getTaiKhoanThongKe } from './api'
import type { TFilter } from './types'

export const useTaiKhoanNhanVienQuery = (
  params: TFilter,
  options?: UseQueryOptions<any>
): UseQueryResult<any> => {
  return useQuery({
    queryKey: ['tai-khoan-nhan-vien', params],
    queryFn: () => getTaiKhoanNhanVien(params),
    ...options,
  })
}

export const useTaiKhoanThongKeQuery = (
  options?: UseQueryOptions<any>
): UseQueryResult<any> => {
  return useQuery({
    queryKey: ['tai-khoan-thong-ke'],
    queryFn: getTaiKhoanThongKe,
    ...options,
  })
}
