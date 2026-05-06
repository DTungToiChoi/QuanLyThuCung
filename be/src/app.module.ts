import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { DanhMucSanPhamModule } from './modules/danh-muc-san-pham/danh-muc-san-pham.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { MailModule } from './modules/mail/mail.module';
import { SanPhamModule } from './modules/san-pham/san-pham.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [
    PrismaModule,
    MailModule,
    AuthModule,
    EmployeesModule,
    DanhMucSanPhamModule,
    SanPhamModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
