import { ApiPropertyOptional } from '@nestjs/swagger';

export class CapNhatDanhMucSanPhamDto {
  @ApiPropertyOptional()
  tenDanhMuc?: string;

  @ApiPropertyOptional()
  moTa?: string;

  @ApiPropertyOptional()
  hinhAnhUrl?: string;

  @ApiPropertyOptional()
  hoatDong?: boolean;
}
