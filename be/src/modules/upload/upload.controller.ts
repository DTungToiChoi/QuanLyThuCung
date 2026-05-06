import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'node:crypto';
import { existsSync, mkdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import { diskStorage } from 'multer';
import { baseResponse } from '../../common/dto/base-response.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

const uploadDir = join(process.cwd(), 'uploads');

const ensureUploadDir = () => {
  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir, { recursive: true });
  }
};

const normalizeExt = (fileName: string) => extname(fileName).toLowerCase();

@ApiTags('Upload')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('upload')
export class UploadController {
  @Post('file')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
      required: ['file'],
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (_req, _file, callback) => {
          ensureUploadDir();
          callback(null, uploadDir);
        },
        filename: (_req, file, callback) => {
          callback(null, `${randomUUID()}${normalizeExt(file.originalname)}`);
        },
      }),
      fileFilter: (_req, file, callback) => {
        if (!file.mimetype.startsWith('image/')) {
          callback(new BadRequestException('File upload phải là hình ảnh.'), false);
          return;
        }

        callback(null, true);
      },
      limits: {
        fileSize: 5 * 1024 * 1024,
      },
    }),
  )
  uploadFile(@UploadedFile() file: any) {
    if (!file) {
      throw new BadRequestException('Vui lòng chọn file để upload.');
    }

    const url = `/uploads/${file.filename}`;

    return baseResponse(
      {
        fileName: file.filename,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        path: url,
        url,
      },
      'Upload file thành công.',
    );
  }
}
