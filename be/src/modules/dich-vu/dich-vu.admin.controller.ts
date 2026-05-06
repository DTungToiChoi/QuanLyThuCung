import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { basePaginationResponse, baseResponse } from '../../common/dto/base-response.dto';
import { GetAllQueryDto } from '../../common/dto/get-all-query.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { DichVuService } from './dich-vu.service';
import { CapNhatDichVuDto } from './dto/cap-nhat-dich-vu.dto';
import { TaoDichVuDto } from './dto/tao-dich-vu.dto';

@ApiTags('Dich Vu Admin')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('dich-vu')
export class DichVuAdminController {
  constructor(private readonly service: DichVuService) {}

  @Get()
  @ApiQuery({ name: 'Query.TenDichVu', required: false, schema: { type: 'string' } })
  @ApiQuery({ name: 'Query.HoatDong', required: false, schema: { type: 'boolean' } })
  @ApiQuery({ name: 'Keyword', required: false, schema: { type: 'string' } })
  @ApiQuery({ name: 'Page', required: false, schema: { type: 'integer' } })
  @ApiQuery({ name: 'PageSize', required: false, schema: { type: 'integer' } })
  async layTatCa(@Query() query: GetAllQueryDto) {
    const result = await this.service.layTatCaQuanTri(query);
    return basePaginationResponse(result.data, result.metaData);
  }

  @Get(':id')
  async layChiTiet(@Param('id') id: string) {
    const dichVu = await this.service.layChiTiet(Number(id));
    return baseResponse(dichVu);
  }

  @Post()
  async tao(@Body() dto: TaoDichVuDto) {
    const dichVu = await this.service.tao(dto);
    return baseResponse(dichVu, 'Tao dich vu thanh cong.');
  }

  @Patch(':id')
  async capNhat(@Param('id') id: string, @Body() dto: CapNhatDichVuDto) {
    const dichVu = await this.service.capNhat(Number(id), dto);
    return baseResponse(dichVu, 'Cap nhat dich vu thanh cong.');
  }

  @Delete(':id')
  async xoa(@Param('id') id: string) {
    const result = await this.service.xoa(Number(id));
    return baseResponse(result, result.message);
  }
}
