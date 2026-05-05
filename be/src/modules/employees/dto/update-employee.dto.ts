import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  @ApiPropertyOptional({ example: 'nv02' })
  username?: string;

  @ApiPropertyOptional({ example: 'nv02@example.com' })
  email?: string;
}
