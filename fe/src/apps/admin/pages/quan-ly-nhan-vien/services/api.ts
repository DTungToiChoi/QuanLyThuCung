import type { IResponse, IResponsePagination } from '@/shared/types/response.type'
import axiosClient from '@/shared/constants/axiosClient'
import { stringtifyQuery } from '@/shared/utils'
import type { TFilter, ITaiKhoanNhanVien, TaiKhoanThongKe } from './types'

export const getTaiKhoanNhanVien = async (
  params: TFilter
): Promise<IResponsePagination<ITaiKhoanNhanVien>> => {
  const query = stringtifyQuery(params)
  const res = await axiosClient.get(`/tai-khoan?${query}`)

  return res.data
}

export const getTaiKhoanThongKe = async (): Promise<IResponse<TaiKhoanThongKe>> => {
  const res = await axiosClient.get('/tai-khoan/thong-ke')

  return res.data
}
