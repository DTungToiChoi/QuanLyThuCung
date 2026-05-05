import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TaoDanhMucSanPhamDto {
  @ApiProperty()
  tenDanhMuc: string;

  @ApiPropertyOptional()
  moTa?: string;

  @ApiPropertyOptional()
  hoatDong?: boolean;
}
