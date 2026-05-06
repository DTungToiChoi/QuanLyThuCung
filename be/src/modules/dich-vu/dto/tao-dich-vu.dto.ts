import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TaoDichVuDto {
  @ApiProperty()
  tenDichVu: string;

  @ApiPropertyOptional()
  moTaDichVu?: string;

  @ApiProperty()
  giaDichVu: number;

  @ApiPropertyOptional()
  hinhAnhUrl?: string;

  @ApiPropertyOptional()
  hoatDong?: boolean;
}
