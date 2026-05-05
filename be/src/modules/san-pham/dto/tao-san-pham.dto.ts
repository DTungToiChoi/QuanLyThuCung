import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TaoSanPhamDto {
  @ApiProperty()
  tenSanPham: string;

  @ApiPropertyOptional()
  moTa?: string;

  @ApiProperty()
  gia: number;

  @ApiPropertyOptional()
  soLuongTon?: number;

  @ApiProperty()
  danhMucId: number;

  @ApiPropertyOptional()
  hinhAnhUrl?: string;

  @ApiPropertyOptional()
  hoatDong?: boolean;
}
