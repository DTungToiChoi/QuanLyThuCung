import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { baseResponse } from '../../common/dto/base-response.dto';
import { DichVuService } from './dich-vu.service';

@ApiTags('Dich Vu Public')
@Controller('public/dich-vu')
export class DichVuPublicController {
  constructor(private readonly service: DichVuService) {}

  @Get()
  async layTatCa() {
    const data = await this.service.layPublic();
    return baseResponse(data);
  }

  @Get(':id')
  async layChiTiet(@Param('id') id: string) {
    const data = await this.service.layChiTietPublic(Number(id));
    return baseResponse(data);
  }
}
