import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma/prisma.module';
import { DanhMucSanPhamController } from './danh-muc-san-pham.controller';
import { DanhMucSanPhamService } from './danh-muc-san-pham.service';

@Module({
  imports: [PrismaModule],
  controllers: [DanhMucSanPhamController],
  providers: [DanhMucSanPhamService],
})
export class DanhMucSanPhamModule {}
