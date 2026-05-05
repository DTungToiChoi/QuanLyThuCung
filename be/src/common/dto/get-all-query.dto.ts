import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetAllQueryDto {
  @ApiPropertyOptional()
  Keyword?: string;

  @ApiPropertyOptional()
  Page?: string;

  @ApiPropertyOptional()
  PageSize?: string;

  @ApiPropertyOptional()
  'Query.Username'?: string;

  @ApiPropertyOptional()
  'Query.Email'?: string;

  @ApiPropertyOptional()
  'Query.TenSanPham'?: string;

  @ApiPropertyOptional()
  'Query.DanhMuc'?: string;

  @ApiPropertyOptional()
  'Query.HoatDong'?: string;

  @ApiPropertyOptional()
  'Query.TenDanhMuc'?: string;
}
