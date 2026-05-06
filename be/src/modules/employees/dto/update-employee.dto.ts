import { ApiPropertyOptional } from '@nestjs/swagger';
import { ChucVu } from '../../../generated/prisma';

export class UpdateEmployeeDto {
  @ApiPropertyOptional({ example: 'nv02' })
  username?: string;

  @ApiPropertyOptional({ example: 'Nguyễn Văn A' })
  tenNhanVien?: string;

  @ApiPropertyOptional({ example: 'nv02@example.com' })
  email?: string;

  @ApiPropertyOptional({ enum: ChucVu, example: ChucVu.BAC_SI })
  chucVu?: ChucVu;
}
