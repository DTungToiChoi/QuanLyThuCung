import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'admin' })
  username: string;

  @ApiProperty({ example: 'admin123456' })
  password: string;
}
