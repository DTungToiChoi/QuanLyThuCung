import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { GetAllQueryDto } from '../../common/dto/get-all-query.dto';
import { parseGetAllQuery } from '../../common/query.helper';
import { Prisma } from '../../generated/prisma';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CapNhatSanPhamDto } from './dto/cap-nhat-san-pham.dto';
import { TaoSanPhamDto } from './dto/tao-san-pham.dto';

@Injectable()
export class SanPhamService {
  constructor(private readonly prisma: PrismaService) {}

  async layTatCa(query: GetAllQueryDto) {
    const parsedQuery = parseGetAllQuery(query);
    const tenSanPham = parsedQuery.query.TenSanPham;
    const tenDanhMuc = parsedQuery.query.TenDanhMuc;
    const hoatDong = this.parseBooleanQuery(parsedQuery.query.HoatDong);

    const where: Prisma.SanPhamWhereInput = {
      tenSanPham: tenSanPham ? { contains: tenSanPham } : undefined,
      danhMuc: tenDanhMuc
        ? { tenDanhMuc: { contains: tenDanhMuc } }
        : undefined,
      hoatDong,
      OR: parsedQuery.keyword
        ? [
            { tenSanPham: { contains: parsedQuery.keyword } },
            { moTa: { contains: parsedQuery.keyword } },
            {
              danhMuc: {
                tenDanhMuc: { contains: parsedQuery.keyword },
              },
            },
          ]
        : undefined,
    };

    const [data, total] = await this.prisma.$transaction([
      this.prisma.sanPham.findMany({
        where,
        include: { danhMuc: true },
        orderBy: { id: 'desc' },
        skip: parsedQuery.skip,
        take: parsedQuery.take,
      }),
      this.prisma.sanPham.count({ where }),
    ]);

    return {
      data,
      metaData: {
        page: parsedQuery.page,
        pageSize: parsedQuery.pageSize,
        total,
        totalPage: Math.ceil(total / parsedQuery.pageSize),
      },
    };
  }

  async layChiTiet(id: number) {
    const sanPham = await this.findById(id);
    return sanPham;
  }

  async tao(dto: TaoSanPhamDto) {
    this.assertRequired(dto.tenSanPham, 'tenSanPham');
    this.assertPositiveNumber(dto.gia, 'gia');
    await this.assertDanhMucExists(dto.danhMucId);

    return this.prisma.sanPham.create({
      data: {
        tenSanPham: dto.tenSanPham,
        moTa: dto.moTa,
        gia: new Prisma.Decimal(dto.gia),
        soLuongTon: dto.soLuongTon ?? 0,
        danhMucId: dto.danhMucId,
        hinhAnhUrl: dto.hinhAnhUrl,
        hoatDong: dto.hoatDong ?? true,
      },
      include: { danhMuc: true },
    });
  }

  async capNhat(id: number, dto: CapNhatSanPhamDto) {
    await this.findById(id);

    if (dto.tenSanPham !== undefined) {
      this.assertRequired(dto.tenSanPham, 'tenSanPham');
    }

    if (dto.gia !== undefined) {
      this.assertPositiveNumber(dto.gia, 'gia');
    }

    if (dto.danhMucId !== undefined) {
      await this.assertDanhMucExists(dto.danhMucId);
    }

    return this.prisma.sanPham.update({
      where: { id },
      data: {
        tenSanPham: dto.tenSanPham,
        moTa: dto.moTa,
        gia: dto.gia !== undefined ? new Prisma.Decimal(dto.gia) : undefined,
        soLuongTon: dto.soLuongTon,
        danhMucId: dto.danhMucId,
        hinhAnhUrl: dto.hinhAnhUrl,
        hoatDong: dto.hoatDong,
      },
      include: { danhMuc: true },
    });
  }

  async xoa(id: number) {
    await this.findById(id);

    await this.prisma.sanPham.delete({
      where: { id },
    });

    return { message: 'Xóa sản phẩm thành công.' };
  }

  private async findById(id: number) {
    if (!Number.isInteger(id)) {
      throw new BadRequestException('Id sản phẩm không hợp lệ.');
    }

    const sanPham = await this.prisma.sanPham.findUnique({
      where: { id },
      include: { danhMuc: true },
    });

    if (!sanPham) {
      throw new NotFoundException('Không tìm thấy sản phẩm.');
    }

    return sanPham;
  }

  private parseBooleanQuery(value?: string) {
    if (value === undefined) return undefined;
    if (value === 'true') return true;
    if (value === 'false') return false;
    throw new BadRequestException('Query.HoatDong phải là true hoặc false.');
  }

  private async assertDanhMucExists(danhMucId: number | undefined) {
    if (!Number.isInteger(danhMucId)) {
      throw new BadRequestException('danhMucId là bắt buộc.');
    }

    const danhMuc = await this.prisma.danhMucSanPham.findUnique({
      where: { id: danhMucId },
      select: { id: true },
    });

    if (!danhMuc) {
      throw new NotFoundException('Không tìm thấy danh mục sản phẩm.');
    }
  }

  private assertRequired(value: string | undefined, field: string) {
    if (!value?.trim()) {
      throw new BadRequestException(`${field} là bắt buộc.`);
    }
  }

  private assertPositiveNumber(value: number | undefined, field: string) {
    if (typeof value !== 'number' || value <= 0) {
      throw new BadRequestException(`${field} phải lớn hơn 0.`);
    }
  }
}
