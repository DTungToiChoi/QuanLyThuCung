import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma/prisma.module';
import { SanPhamController } from './san-pham.controller';
import { SanPhamService } from './san-pham.service';

@Module({
  imports: [PrismaModule],
  controllers: [SanPhamController],
  providers: [SanPhamService],
})
export class SanPhamModule {}
