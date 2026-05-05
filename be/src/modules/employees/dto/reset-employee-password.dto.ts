import { ApiPropertyOptional } from '@nestjs/swagger';

export class ResetEmployeePasswordDto {
  @ApiPropertyOptional({ example: 'newpass123' })
  password?: string;

  @ApiPropertyOptional({ example: true })
  sendEmail?: boolean;
}
