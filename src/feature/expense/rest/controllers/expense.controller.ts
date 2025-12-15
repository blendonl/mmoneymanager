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
import { ExpenseService } from '../../core/application/services/expense.service';
import { CreateExpenseRequestDto } from '../dto/create-expense-request.dto';
import { UpdateExpenseRequestDto } from '../dto/update-expense-request.dto';
import { QueryExpenseDto } from '../dto/query-expense.dto';
import { ExpenseResponseDto } from '../dto/expense-response.dto';
import { CreateExpenseDto } from '../../core/application/dto/create-expense.dto';
import { UpdateExpenseDto } from '../../core/application/dto/update-expense.dto';
import { ExpenseFilters } from '../../core/application/dto/expense-filters.dto';
import { CreateExpenseItemDto } from '../../../expense-item/core/application/dto/create-expense-item.dto';
import { Pagination } from '../../../transaction/core/application/dto/pagination.dto';

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: CreateExpenseRequestDto) {
    const coreDto = new CreateExpenseDto({
      userId: createDto.userId,
      categoryId: createDto.categoryId,
      storeName: createDto.storeName,
      storeLocation: createDto.storeLocation,
      items: createDto.items.map(
        (item) =>
          new CreateExpenseItemDto({
            expenseId: '', // Will be set in use case
            categoryId: item.categoryId,
            itemName: item.itemName,
            itemPrice: item.itemPrice,
            discount: item.discount,
          }),
      ),
    });

    const expense = await this.expenseService.create(coreDto);
    return ExpenseResponseDto.fromEntity(expense);
  }

  @Get()
  async findAll(@Query() query: QueryExpenseDto) {
    const filters = new ExpenseFilters({
      userId: query.userId,
      categoryId: query.categoryId,
      storeId: query.storeId,
      dateFrom: query.dateFrom ? new Date(query.dateFrom) : undefined,
      dateTo: query.dateTo ? new Date(query.dateTo) : undefined,
      valueMin: query.valueMin,
      valueMax: query.valueMax,
    });

    const pagination = new Pagination(query.page, query.limit);

    const result = await this.expenseService.findAll(filters, pagination);

    return {
      data: ExpenseResponseDto.fromEntities(result.data),
      total: result.total,
      page: pagination.page,
      limit: pagination.limit,
    };
  }

  @Get('statistics')
  async getStatistics(
    @Query('userId') userId?: string,
    @Query() query?: QueryExpenseDto,
  ) {
    const filters = query
      ? new ExpenseFilters({
          userId: query.userId,
          categoryId: query.categoryId,
          storeId: query.storeId,
          dateFrom: query.dateFrom ? new Date(query.dateFrom) : undefined,
          dateTo: query.dateTo ? new Date(query.dateTo) : undefined,
          valueMin: query.valueMin,
          valueMax: query.valueMax,
        })
      : undefined;

    const stats = await this.expenseService.getStatistics(userId, filters);

    return {
      totalExpenses: stats.totalExpenses,
      expenseCount: stats.expenseCount,
      averageExpense: stats.averageExpense,
      expensesByCategory: stats.expensesByCategory,
      expensesByStore: stats.expensesByStore,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const expense = await this.expenseService.findById(id);
    return ExpenseResponseDto.fromEntity(expense);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateExpenseRequestDto,
  ) {
    const coreDto = new UpdateExpenseDto({
      categoryId: updateDto.categoryId,
      storeId: updateDto.storeId,
    });

    const expense = await this.expenseService.update(id, coreDto);
    return ExpenseResponseDto.fromEntity(expense);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.expenseService.delete(id);
  }
}
