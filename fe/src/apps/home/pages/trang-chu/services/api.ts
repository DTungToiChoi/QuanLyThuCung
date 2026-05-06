import api from '../../../../../lib/axios'
import type { IResponsePagination } from '../../../../../shared/types/response.type'
import type { IDichVu, TFilter } from './types'

const buildQueryString = (params: TFilter) => {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, String(value))
    }
  })

  return searchParams.toString()
}

export const getDichVu = async (params: TFilter): Promise<IResponsePagination<IDichVu>> => {
  const query = buildQueryString(params)
  const url = query ? `/public/dich-vu?${query}` : '/public/dich-vu'
  const response = await api.get<IResponsePagination<IDichVu>>(url)
  return response.data
}
