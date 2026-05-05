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
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import {
  basePaginationResponse,
  baseResponse,
} from '../../common/dto/base-response.dto';
import { GetAllQueryDto } from '../../common/dto/get-all-query.dto';
import { CapNhatSanPhamDto } from './dto/cap-nhat-san-pham.dto';
import { TaoSanPhamDto } from './dto/tao-san-pham.dto';
import { SanPhamService } from './san-pham.service';

@ApiTags('San Pham')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('san-pham')
export class SanPhamController {
  constructor(private readonly sanPhamService: SanPhamService) {}

  @Get()
  @ApiQuery({ name: 'Query.TenSanPham', required: false, schema: { type: 'string' } })
  @ApiQuery({ name: 'Query.TenDanhMuc', required: false, schema: { type: 'string' } })
  @ApiQuery({ name: 'Query.HoatDong', required: false, schema: { type: 'boolean' } })
  @ApiQuery({ name: 'Keyword', required: false, schema: { type: 'string' } })
  @ApiQuery({ name: 'Page', required: false, schema: { type: 'integer' } })
  @ApiQuery({ name: 'PageSize', required: false, schema: { type: 'integer' } })
  async layTatCa(@Query() query: GetAllQueryDto) {
    const result = await this.sanPhamService.layTatCa(query);
    return basePaginationResponse(result.data, result.metaData);
  }

  @Get(':id')
  async layChiTiet(@Param('id') id: string) {
    const sanPham = await this.sanPhamService.layChiTiet(Number(id));
    return baseResponse(sanPham);
  }

  @Post()
  async tao(@Body() dto: TaoSanPhamDto) {
    const sanPham = await this.sanPhamService.tao(dto);
    return baseResponse(sanPham, 'Tạo sản phẩm thành công.');
  }

  @Patch(':id')
  async capNhat(@Param('id') id: string, @Body() dto: CapNhatSanPhamDto) {
    const sanPham = await this.sanPhamService.capNhat(Number(id), dto);
    return baseResponse(sanPham, 'Cập nhật sản phẩm thành công.');
  }

  @Delete(':id')
  async xoa(@Param('id') id: string) {
    const result = await this.sanPhamService.xoa(Number(id));
    return baseResponse(result, result.message);
  }
}
