import type { IResponsePagination } from '../../../shared/types/response.type'
import type { IDichVu, TFilter } from './types'
import { stringtifyQuery } from '../../../shared/utils'
import axiosClient from '@/shared/constants/axiosClient';

export const getDichVu = async (
  params: TFilter
): Promise<IResponsePagination<IDichVu>> => {
  const query = stringtifyQuery(params);

  const res = await axiosClient.get(`/public/dich-vu?${query}`);

  return res.data; // 👈 BẮT BUỘC
};