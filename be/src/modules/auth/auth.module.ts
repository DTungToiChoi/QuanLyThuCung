import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../../database/prisma/prisma.module';
import { MailModule } from '../mail/mail.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'mySecretKey',
      signOptions: {
        expiresIn: '1d',
      },
    }),
    PrismaModule,
    MailModule,
  ],
  providers: [AuthService, JwtAccessStrategy],
  controllers: [AuthController],
})
export class AuthModule {}