import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { GetAllQueryDto } from '../../common/dto/get-all-query.dto';
import { parseGetAllQuery } from '../../common/query.helper';
import { PrismaService } from '../../database/prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { MailService } from '../mail/mail.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { ResetEmployeePasswordDto } from './dto/reset-employee-password.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  async findAll(query: GetAllQueryDto) {
    const parsedQuery = parseGetAllQuery(query);
    const username = parsedQuery.query.Username;
    const email = parsedQuery.query.Email;
    const where: Prisma.UserWhereInput = {
      roles: {
        some: { name: 'NHANVIEN' },
      },
      username: username ? { contains: username } : undefined,
      email: email ? { contains: email } : undefined,
      OR: parsedQuery.keyword
        ? [
            { username: { contains: parsedQuery.keyword } },
            { email: { contains: parsedQuery.keyword } },
          ]
        : undefined,
    };

    const [data, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        select: this.employeeSelect,
        orderBy: { id: 'asc' },
        skip: parsedQuery.skip,
        take: parsedQuery.take,
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      data,
      metaData: {
        page: parsedQuery.page,
        pageSize: parsedQuery.pageSize,
        total,
        totalPage: Math.ceil(total / parsedQuery.pageSize),
      },
      query: parsedQuery.query,
    };
  }

  async findOne(id: number) {
    const employee = await this.findEmployeeById(id);
    return employee;
  }

  async create(dto: CreateEmployeeDto) {
    this.assertRequired(dto.username, 'username');
    this.assertRequired(dto.email, 'email');
    this.assertRequired(dto.password, 'password');

    await this.assertUniqueUser(dto.username, dto.email);

    const password = await bcrypt.hash(dto.password, 10);

    return this.prisma.user.create({
      data: {
        username: dto.username,
        email: dto.email,
        password,
        roles: {
          connectOrCreate: {
            where: { name: 'NHANVIEN' },
            create: { name: 'NHANVIEN' },
          },
        },
      },
      select: this.employeeSelect,
    });
  }

  async update(id: number, dto: UpdateEmployeeDto) {
    await this.findEmployeeById(id);

    if (dto.username || dto.email) {
      await this.assertUniqueUser(dto.username, dto.email, id);
    }

    return this.prisma.user.update({
      where: { id },
      data: {
        username: dto.username,
        email: dto.email,
      },
      select: this.employeeSelect,
    });
  }

  async resetPassword(id: number, dto: ResetEmployeePasswordDto) {
    const employee = await this.findEmployeeById(id);
    const newPassword = dto.password || randomBytes(6).toString('base64url');
    const password = await bcrypt.hash(newPassword, 10);

    const updatedEmployee = await this.prisma.user.update({
      where: { id },
      data: {
        password,
        resetPasswordToken: null,
        resetPasswordExpiresAt: null,
      },
      select: this.employeeSelect,
    });

    if (dto.sendEmail && employee.email) {
      await this.mailService.sendEmployeePasswordResetEmail(
        employee.email,
        newPassword,
      );
    }

    return {
      employee: updatedEmployee,
      temporaryPassword: newPassword,
    };
  }

  async remove(id: number) {
    await this.findEmployeeById(id);

    await this.prisma.user.delete({
      where: { id },
    });

    return { message: 'Employee account deleted successfully.' };
  }

  private async findEmployeeById(id: number) {
    if (!Number.isInteger(id)) {
      throw new BadRequestException('Invalid employee id.');
    }

    const employee = await this.prisma.user.findFirst({
      where: {
        id,
        roles: {
          some: { name: 'NHANVIEN' },
        },
      },
      select: this.employeeSelect,
    });

    if (!employee) {
      throw new NotFoundException('Employee account not found.');
    }

    return employee;
  }

  private async assertUniqueUser(
    username?: string,
    email?: string,
    excludeId?: number,
  ) {
    const orConditions: Prisma.UserWhereInput[] = [];

    if (username) orConditions.push({ username });
    if (email) orConditions.push({ email });

    if (!orConditions.length) return;

    const existingUser = await this.prisma.user.findFirst({
      where: {
        id: excludeId ? { not: excludeId } : undefined,
        OR: orConditions,
      },
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

  private readonly employeeSelect = {
    id: true,
    username: true,
    email: true,
    roles: {
      select: {
        name: true,
      },
    },
    createdAt: true,
    updatedAt: true,
  };
}
