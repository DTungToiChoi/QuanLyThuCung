import { BadRequestException } from '@nestjs/common';
import { GetAllQueryDto } from './dto/get-all-query.dto';

export type ParsedGetAllQuery = {
  keyword?: string;
  page: number;
  pageSize: number;
  query: Record<string, string | undefined>;
  skip: number;
  take: number;
};

export const parseGetAllQuery = (query: GetAllQueryDto): ParsedGetAllQuery => {
  const page = Number(query.Page  ?? 1);
  const pageSize = Number(query.PageSize ?? 10);

  if (!Number.isInteger(page) || page < 1) {
    throw new BadRequestException('Page must be a positive integer.');
  }

  if (!Number.isInteger(pageSize) || pageSize < 1) {
    throw new BadRequestException('PageSize must be a positive integer.');
  }

  return {
    keyword: query.Keyword?.trim() || undefined,
    page,
    pageSize,
    query: parseQueryFields(query),
    skip: (page - 1) * pageSize,
    take: pageSize,
  };
};

const parseQueryFields = (
  query: GetAllQueryDto,
): Record<string, string | undefined> => {
  return Object.entries(query).reduce<Record<string, string | undefined>>(
    (result, [key, value]) => {
      if (key.startsWith('Query.')) {
        result[key.replace('Query.', '')] = value?.trim() || undefined;
      }

      return result;
    },
    {},
  );
};
