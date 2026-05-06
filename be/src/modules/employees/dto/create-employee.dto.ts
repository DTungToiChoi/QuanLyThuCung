import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ChucVu } from '../../../generated/prisma';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'nv01' })
  username: string;

  @ApiPropertyOptional({ example: 'Nguyễn Văn A' })
  tenNhanVien?: string;

  @ApiProperty({ example: 'nv01@example.com' })
  email: string;

  @ApiProperty({ example: '123456' })
  password: string;

  @ApiPropertyOptional({ enum: ChucVu, example: ChucVu.BAC_SI })
  chucVu?: ChucVu;
}
