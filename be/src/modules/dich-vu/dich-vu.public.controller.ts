import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { basePaginationResponse, baseResponse } from '../../common/dto/base-response.dto';
import { GetAllQueryDto } from '../../common/dto/get-all-query.dto';
import { DichVuService } from './dich-vu.service';

@ApiTags('Dich Vu Public')
@Controller('public/dich-vu')
export class DichVuPublicController {
  constructor(private readonly service: DichVuService) {}

  @Get()
  @ApiQuery({ name: 'Query.TenDichVu', required: false, schema: { type: 'string' } })
  @ApiQuery({ name: 'Keyword', required: false, schema: { type: 'string' } })
  @ApiQuery({ name: 'Page', required: false, schema: { type: 'integer' } })
  @ApiQuery({ name: 'PageSize', required: false, schema: { type: 'integer' } })
  @ApiQuery({ name: 'page', required: false, schema: { type: 'integer' } })
  @ApiQuery({ name: 'pageSize', required: false, schema: { type: 'integer' } })
  @ApiQuery({ name: 'pagesize', required: false, schema: { type: 'integer' } })
  async layTatCa(@Query() query: GetAllQueryDto) {
    const result = await this.service.layPublic(query);
    return basePaginationResponse(result.data, result.metaData);
  }

  @Get(':id')
  async layChiTiet(@Param('id') id: string) {
    const data = await this.service.layChiTietPublic(Number(id));
    return baseResponse(data);
  }
}
