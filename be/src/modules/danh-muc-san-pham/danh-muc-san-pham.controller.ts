import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { basePaginationResponse, baseResponse } from '../../common/dto/base-response.dto';
import { GetAllQueryDto } from '../../common/dto/get-all-query.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CapNhatDanhMucSanPhamDto } from './dto/cap-nhat-danh-muc-san-pham.dto';
import { TaoDanhMucSanPhamDto } from './dto/tao-danh-muc-san-pham.dto';
import { DanhMucSanPhamService } from './danh-muc-san-pham.service';

@ApiTags('Danh Muc San Pham')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('danh-muc-san-pham')
export class DanhMucSanPhamController {
  constructor(private readonly service: DanhMucSanPhamService) {}

  @Get()
  @ApiQuery({ name: 'Query.TenDanhMuc', required: false, schema: { type: 'string' } })
  @ApiQuery({ name: 'Query.HoatDong', required: false, schema: { type: 'boolean' } })
  @ApiQuery({ name: 'Keyword', required: false, schema: { type: 'string' } })
  @ApiQuery({ name: 'Page', required: false, schema: { type: 'integer' } })
  @ApiQuery({ name: 'PageSize', required: false, schema: { type: 'integer' } })
  async layTatCa(@Query() query: GetAllQueryDto) {
    const result = await this.service.layTatCa(query);
    return basePaginationResponse(result.data, result.metaData);
  }

  @Get(':id')
  async layChiTiet(@Param('id') id: string) {
    const danhMuc = await this.service.layChiTiet(Number(id));
    return baseResponse(danhMuc);
  }

  @Post()
  async tao(@Body() dto: TaoDanhMucSanPhamDto) {
    const danhMuc = await this.service.tao(dto);
    return baseResponse(danhMuc, 'Tạo danh mục sản phẩm thành công.');
  }

  @Patch(':id')
  async capNhat(@Param('id') id: string, @Body() dto: CapNhatDanhMucSanPhamDto) {
    const danhMuc = await this.service.capNhat(Number(id), dto);
    return baseResponse(danhMuc, 'Cập nhật danh mục sản phẩm thành công.');
  }

  @Delete(':id')
  async xoa(@Param('id') id: string) {
    const result = await this.service.xoa(Number(id));
    return baseResponse(result, result.message);
  }
}
