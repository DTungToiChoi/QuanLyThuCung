import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma/prisma.module';
import { DichVuAdminController } from './dich-vu.admin.controller';
import { DichVuPublicController } from './dich-vu.public.controller';
import { DichVuService } from './dich-vu.service';

@Module({
  imports: [PrismaModule],
  controllers: [DichVuAdminController, DichVuPublicController],
  providers: [DichVuService],
})
export class DichVuModule {}
