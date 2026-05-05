import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'nv01' })
  username: string;

  @ApiProperty({ example: 'nv01@example.com' })
  email: string;

  @ApiProperty({ example: '123456' })
  password: string;
}
