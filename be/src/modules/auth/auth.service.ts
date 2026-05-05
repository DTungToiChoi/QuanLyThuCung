// auth.service.ts
import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { createHash, randomBytes } from 'crypto';
import { PrismaService } from '../../database/prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { MailService } from '../mail/mail.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { username },
      include: { roles: true },
    });

    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    return user;
  }

  async loginWithPassword(dto: LoginDto) {
    const user = await this.validateUser(dto.username, dto.password);

    if (!user) {
      throw new UnauthorizedException('Invalid username or password.');
    }

    return this.login(user);
  }

  async register(dto: RegisterDto) {
    this.assertRequired(dto.username, 'username');
    this.assertRequired(dto.email, 'email');
    this.assertRequired(dto.password, 'password');

    await this.assertUniqueUser(dto.username, dto.email);

    const password = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        username: dto.username,
        email: dto.email,
        password,
        roles: {
          connectOrCreate: {
            where: { name: 'USER' },
            create: { name: 'USER' },
          },
        },
      },
      include: { roles: true },
    });

    return this.login(user);
  }

  async login(user: any) {
    const payload = {
      sub: user.id,
      username: user.username,
      roles: user.roles.map((r) => r.name),
    };

    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: '1h',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '7d',
    });

    return {
      username: user.username,
      roles: payload.roles,
      accessToken,
      accessExpiresAt: new Date(Date.now() + 3600 * 1000),
      refreshToken,
      refreshExpiresAt: new Date(Date.now() + 7 * 24 * 3600 * 1000),
    };
  }

  async forgotPassword(email: string) {
    const response = {
      message:
        'If the email exists, a password reset link has been sent.',
    };

    if (!email) return response;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) return response;

    const token = randomBytes(32).toString('hex');
    const tokenHash = createHash('sha256').update(token).digest('hex');
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: tokenHash,
        resetPasswordExpiresAt: expiresAt,
      },
    });

    const appUrl = process.env.APP_URL ?? 'http://localhost:3000';
    const resetUrl = `${appUrl}/reset-password?token=${token}`;

    await this.mailService.sendPasswordResetEmail(email, resetUrl);

    return response;
  }

  private async assertUniqueUser(username?: string, email?: string) {
    const orConditions: Prisma.UserWhereInput[] = [];

    if (username) orConditions.push({ username });
    if (email) orConditions.push({ email });

    if (!orConditions.length) return;

    const existingUser = await this.prisma.user.findFirst({
      where: { OR: orConditions },
      select: {
        username: true,
        email: true,
      },
    });

    if (!existingUser) return;

    if (existingUser.username === username) {
      throw new ConflictException('Username already exists.');
    }

    throw new ConflictException('Email already exists.');
  }

  private assertRequired(value: string | undefined, field: string) {
    if (!value?.trim()) {
      throw new BadRequestException(`${field} is required.`);
    }
  }
}
