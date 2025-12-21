import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { IncomeService } from '../../core/application/services/income.service';
import { CreateIncomeRequestDto } from '../dto/create-income-request.dto';
import { UpdateIncomeRequestDto } from '../dto/update-income-request.dto';
import { IncomeResponseDto } from '../dto/income-response.dto';
import { CreateIncomeDto } from '../../core/application/dto/create-income.dto';
import { UpdateIncomeDto } from '../../core/application/dto/update-income.dto';
import { Pagination } from '../../../transaction/core/application/dto/pagination.dto';

@Controller('incomes')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: CreateIncomeRequestDto) {
    const coreDto = new CreateIncomeDto(
      createDto.transactionId,
      createDto.storeId,
      createDto.categoryId,
    );

    const income = await this.incomeService.create(coreDto);
    return IncomeResponseDto.fromEntity(income);
  }

  @Get()
  async findAll(
    @Query('storeId') storeId?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const pagination = new Pagination(page, limit);

    const result = await this.incomeService.findAll(storeId, pagination);

    return {
      data: IncomeResponseDto.fromEntities(result.data),
      total: result.total,
      page: pagination.page,
      limit: pagination.limit,
    };
  }

  @Get('transaction/:transactionId')
  async findByTransactionId(@Param('transactionId') transactionId: string) {
    const income = await this.incomeService.findByTransactionId(transactionId);
    return IncomeResponseDto.fromEntity(income);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const income = await this.incomeService.findById(id);
    return IncomeResponseDto.fromEntity(income);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateIncomeRequestDto,
  ) {
    const coreDto = new UpdateIncomeDto({
      categoryId: updateDto.categoryId,
    });

    const income = await this.incomeService.update(id, coreDto);
    return IncomeResponseDto.fromEntity(income);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.incomeService.delete(id);
  }
}
