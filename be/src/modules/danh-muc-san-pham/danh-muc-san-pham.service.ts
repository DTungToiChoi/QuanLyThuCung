import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GetAllQueryDto } from '../../common/dto/get-all-query.dto';
import { parseGetAllQuery } from '../../common/query.helper';
import { PrismaService } from '../../database/prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { CapNhatDanhMucSanPhamDto } from './dto/cap-nhat-danh-muc-san-pham.dto';
import { TaoDanhMucSanPhamDto } from './dto/tao-danh-muc-san-pham.dto';

@Injectable()
export class DanhMucSanPhamService {
  constructor(private readonly prisma: PrismaService) {}

  async layTatCa(query: GetAllQueryDto) {
    const parsedQuery = parseGetAllQuery(query);
    const tenDanhMuc = parsedQuery.query.TenDanhMuc;
    const hoatDong = this.parseBooleanQuery(parsedQuery.query.HoatDong);

    const where: Prisma.DanhMucSanPhamWhereInput = {
      tenDanhMuc: tenDanhMuc ? { contains: tenDanhMuc } : undefined,
      hoatDong,
      OR: parsedQuery.keyword
        ? [
            { tenDanhMuc: { contains: parsedQuery.keyword } },
            { moTa: { contains: parsedQuery.keyword } },
          ]
        : undefined,
    };

    const [data, total] = await this.prisma.$transaction([
      this.prisma.danhMucSanPham.findMany({
        where,
        orderBy: { id: 'desc' },
        skip: parsedQuery.skip,
        take: parsedQuery.take,
        include: { _count: { select: { sanPhams: true } } },
      }),
      this.prisma.danhMucSanPham.count({ where }),
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
    return this.findById(id);
  }

  async tao(dto: TaoDanhMucSanPhamDto) {
    this.assertRequired(dto.tenDanhMuc, 'tenDanhMuc');
    await this.assertUniqueTenDanhMuc(dto.tenDanhMuc);

    return this.prisma.danhMucSanPham.create({
      data: {
        tenDanhMuc: dto.tenDanhMuc,
        moTa: dto.moTa,
        hoatDong: dto.hoatDong ?? true,
      },
    });
  }

  async capNhat(id: number, dto: CapNhatDanhMucSanPhamDto) {
    await this.findById(id);

    if (dto.tenDanhMuc !== undefined) {
      this.assertRequired(dto.tenDanhMuc, 'tenDanhMuc');
      await this.assertUniqueTenDanhMuc(dto.tenDanhMuc, id);
    }

    return this.prisma.danhMucSanPham.update({
      where: { id },
      data: {
        tenDanhMuc: dto.tenDanhMuc,
        moTa: dto.moTa,
        hoatDong: dto.hoatDong,
      },
    });
  }

  async xoa(id: number) {
    await this.findById(id);

    const sanPhamCount = await this.prisma.sanPham.count({
      where: { danhMucId: id },
    });

    if (sanPhamCount > 0) {
      throw new BadRequestException('Không thể xóa danh mục đang có sản phẩm.');
    }

    await this.prisma.danhMucSanPham.delete({ where: { id } });
    return { message: 'Xóa danh mục sản phẩm thành công.' };
  }

  private async findById(id: number) {
    if (!Number.isInteger(id)) {
      throw new BadRequestException('Id danh mục không hợp lệ.');
    }

    const danhMuc = await this.prisma.danhMucSanPham.findUnique({
      where: { id },
      include: { _count: { select: { sanPhams: true } } },
    });

    if (!danhMuc) {
      throw new NotFoundException('Không tìm thấy danh mục sản phẩm.');
    }

    return danhMuc;
  }

  private async assertUniqueTenDanhMuc(tenDanhMuc: string, excludeId?: number) {
    const existing = await this.prisma.danhMucSanPham.findFirst({
      where: {
        tenDanhMuc,
        id: excludeId ? { not: excludeId } : undefined,
      },
      select: { id: true },
    });

    if (existing) {
      throw new ConflictException('Tên danh mục đã tồn tại.');
    }
  }

  private parseBooleanQuery(value?: string) {
    if (value === undefined) return undefined;
    if (value === 'true') return true;
    if (value === 'false') return false;
    throw new BadRequestException('Query.HoatDong phải là true hoặc false.');
  }

  private assertRequired(value: string | undefined, field: string) {
    if (!value?.trim()) {
      throw new BadRequestException(`${field} là bắt buộc.`);
    }
  }
}
