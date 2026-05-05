import { ApiPropertyOptional } from '@nestjs/swagger';

export class CapNhatSanPhamDto {
  @ApiPropertyOptional()
  tenSanPham?: string;

  @ApiPropertyOptional()
  moTa?: string;

  @ApiPropertyOptional()
  gia?: number;

  @ApiPropertyOptional()
  soLuongTon?: number;

  @ApiPropertyOptional()
  danhMucId?: number;

  @ApiPropertyOptional()
  hinhAnhUrl?: string;

  @ApiPropertyOptional()
  hoatDong?: boolean;
}
