export type PaginationMetaDto = {
  page: number;
  pageSize: number;
  total: number;
  totalPage: number;
};

export const baseResponse = (data: any, message = 'Success') => ({
  code: 0,
  success: true,
  message,
  data,
});

export const basePaginationResponse = (
  data: any,
  metaData: PaginationMetaDto,
  message = 'Success',
) => ({
  code: 0,
  success: true,
  message,
  data,
  metaData,
});
