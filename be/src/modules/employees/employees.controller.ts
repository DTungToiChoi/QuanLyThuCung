import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import {
  basePaginationResponse,
  baseResponse,
} from '../../common/dto/base-response.dto';
import { GetAllQueryDto } from '../../common/dto/get-all-query.dto';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { ResetEmployeePasswordDto } from './dto/reset-employee-password.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeesService } from './employees.service';

@ApiTags('Tài khoản')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('tai-khoan')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  @ApiQuery({
    name: 'Query.Username',
    required: false,
    schema: { type: 'string' },
  })
  @ApiQuery({
    name: 'Query.Email',
    required: false,
    schema: { type: 'string' },
  })
  @ApiQuery({
    name: 'Keyword',
    required: false,
    schema: { type: 'string' },
  })
  @ApiQuery({
    name: 'Page',
    required: false,
    schema: { type: 'integer' },
  })
  @ApiQuery({
    name: 'PageSize',
    required: false,
    schema: { type: 'integer' },
  })
  async findAll(@Query() query: GetAllQueryDto) {
    const result = await this.employeesService.findAll(query);
    return basePaginationResponse(result.data, result.metaData);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const employee = await this.employeesService.findOne(Number(id));
    return baseResponse(employee);
  }

  @Post()
  async create(@Body() dto: CreateEmployeeDto) {
    const employee = await this.employeesService.create(dto);
    return baseResponse(employee, 'Employee account created successfully.');
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateEmployeeDto) {
    const employee = await this.employeesService.update(Number(id), dto);
    return baseResponse(employee, 'Employee account updated successfully.');
  }

  @Patch(':id/reset-password')
  async resetPassword(
    @Param('id') id: string,
    @Body() dto: ResetEmployeePasswordDto,
  ) {
    const result = await this.employeesService.resetPassword(Number(id), dto);
    return baseResponse(result, 'Employee password reset successfully.');
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.employeesService.remove(Number(id));
    return baseResponse(result, result.message);
  }
}
