import type { IResponsePagination } from '../../../../../shared/types/response.type'
import type { IDichVu, TFilter } from './types'
import axiosClient from '../../../../../config/axios'
import { stringtifyQuery } from '../../../../../shared/utils'

export const getDichVu = (params: TFilter): Promise<IResponsePagination<IDichVu>> => {
  const query = stringtifyQuery(params);
  return axiosClient.get(`/CoQuan?${query}`);
};
