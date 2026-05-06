import { ApiPropertyOptional } from '@nestjs/swagger';

export class CapNhatDichVuDto {
  @ApiPropertyOptional()
  tenDichVu?: string;

  @ApiPropertyOptional()
  moTaDichVu?: string;

  @ApiPropertyOptional()
  giaDichVu?: number;

  @ApiPropertyOptional()
  hinhAnhUrl?: string;

  @ApiPropertyOptional()
  hoatDong?: boolean;
}
