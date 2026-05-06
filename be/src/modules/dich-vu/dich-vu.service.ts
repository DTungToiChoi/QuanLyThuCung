import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { GetAllQueryDto } from '../../common/dto/get-all-query.dto';
import { parseGetAllQuery } from '../../common/query.helper';
import { PrismaService } from '../../database/prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { CapNhatDichVuDto } from './dto/cap-nhat-dich-vu.dto';
import { TaoDichVuDto } from './dto/tao-dich-vu.dto';

@Injectable()
export class DichVuService {
  constructor(private readonly prisma: PrismaService) {}

  async layTatCaQuanTri(query: GetAllQueryDto) {
    const parsedQuery = parseGetAllQuery(query);
    const tenDichVu = parsedQuery.query.TenDichVu;
    const hoatDong = this.parseBooleanQuery(parsedQuery.query.HoatDong);

    const where: Prisma.DichVuWhereInput = {
      tenDichVu: tenDichVu ? { contains: tenDichVu } : undefined,
      hoatDong,
      OR: parsedQuery.keyword
        ? [
            { tenDichVu: { contains: parsedQuery.keyword } },
            { moTaDichVu: { contains: parsedQuery.keyword } },
          ]
        : undefined,
    };

    return this.getPagedResult(where, parsedQuery.page, parsedQuery.pageSize, parsedQuery.skip, parsedQuery.take);
  }

  async layPublic(query: GetAllQueryDto) {
    const parsedQuery = parseGetAllQuery(query);
    const tenDichVu = parsedQuery.query.TenDichVu;

    const where: Prisma.DichVuWhereInput = {
      tenDichVu: tenDichVu ? { contains: tenDichVu } : undefined,
      hoatDong: true,
      OR: parsedQuery.keyword
        ? [
            { tenDichVu: { contains: parsedQuery.keyword } },
            { moTaDichVu: { contains: parsedQuery.keyword } },
          ]
        : undefined,
    };

    return this.getPagedResult(where, parsedQuery.page, parsedQuery.pageSize, parsedQuery.skip, parsedQuery.take);
  }

  async layChiTiet(id: number) {
    return this.findById(id);
  }

  async layChiTietPublic(id: number) {
    const dichVu = await this.prisma.dichVu.findFirst({
      where: { id, hoatDong: true },
    });

    if (!dichVu) {
      throw new NotFoundException('Khong tim thay dich vu.');
    }

    return dichVu;
  }

  async tao(dto: TaoDichVuDto) {
    this.assertRequired(dto.tenDichVu, 'tenDichVu');
    this.assertPositiveNumber(dto.giaDichVu, 'giaDichVu');

    return this.prisma.dichVu.create({
      data: {
        tenDichVu: dto.tenDichVu,
        moTaDichVu: dto.moTaDichVu,
        giaDichVu: new Prisma.Decimal(dto.giaDichVu),
        hinhAnhUrl: dto.hinhAnhUrl,
        hoatDong: dto.hoatDong ?? true,
      },
    });
  }

  async capNhat(id: number, dto: CapNhatDichVuDto) {
    await this.findById(id);

    if (dto.tenDichVu !== undefined) {
      this.assertRequired(dto.tenDichVu, 'tenDichVu');
    }

    if (dto.giaDichVu !== undefined) {
      this.assertPositiveNumber(dto.giaDichVu, 'giaDichVu');
    }

    return this.prisma.dichVu.update({
      where: { id },
      data: {
        tenDichVu: dto.tenDichVu,
        moTaDichVu: dto.moTaDichVu,
        giaDichVu: dto.giaDichVu !== undefined ? new Prisma.Decimal(dto.giaDichVu) : undefined,
        hinhAnhUrl: dto.hinhAnhUrl,
        hoatDong: dto.hoatDong,
      },
    });
  }

  async xoa(id: number) {
    await this.findById(id);
    await this.prisma.dichVu.delete({ where: { id } });
    return { message: 'Xoa dich vu thanh cong.' };
  }

  private async getPagedResult(
    where: Prisma.DichVuWhereInput,
    page: number,
    pageSize: number,
    skip: number,
    take: number,
  ) {
    const [data, total] = await this.prisma.$transaction([
      this.prisma.dichVu.findMany({
        where,
        orderBy: { id: 'desc' },
        skip,
        take,
      }),
      this.prisma.dichVu.count({ where }),
    ]);

    return {
      data,
      metaData: {
        page,
        pageSize,
        total,
        totalPage: Math.ceil(total / pageSize),
      },
    };
  }

  private async findById(id: number) {
    if (!Number.isInteger(id)) {
      throw new BadRequestException('Id dich vu khong hop le.');
    }

    const dichVu = await this.prisma.dichVu.findUnique({
      where: { id },
    });

    if (!dichVu) {
      throw new NotFoundException('Khong tim thay dich vu.');
    }

    return dichVu;
  }

  private assertRequired(value: string | undefined, field: string) {
    if (!value?.trim()) {
      throw new BadRequestException(`${field} la bat buoc.`);
    }
  }

  private assertPositiveNumber(value: number | undefined, field: string) {
    if (typeof value !== 'number' || value <= 0) {
      throw new BadRequestException(`${field} phai lon hon 0.`);
    }
  }

  private parseBooleanQuery(value?: string) {
    if (value === undefined) return undefined;
    if (value === 'true') return true;
    if (value === 'false') return false;
    throw new BadRequestException('Query.HoatDong phai la true hoac false.');
  }
}
