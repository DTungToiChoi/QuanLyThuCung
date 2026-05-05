import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'user01' })
  username: string;

  @ApiProperty({ example: 'user01@example.com' })
  email: string;

  @ApiProperty({ example: '123456' })
  password: string;
}
