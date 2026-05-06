import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetAllQueryDto {
  @ApiPropertyOptional()
  Keyword?: string;

  @ApiPropertyOptional()
  Page?: string;

  @ApiPropertyOptional()
  PageSize?: string;
}
