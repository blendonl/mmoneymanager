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
import { ExpenseItemCategoryService } from '../../core/application/services/expense-item-category.service';
import { CreateExpenseItemCategoryRequestDto } from '../dto/create-expense-item-category-request.dto';
import { UpdateExpenseItemCategoryRequestDto } from '../dto/update-expense-item-category-request.dto';
import { ExpenseItemCategoryResponseDto } from '../dto/expense-item-category-response.dto';
import { CreateExpenseItemCategoryDto } from '../../core/application/dto/create-expense-item-category.dto';
import { UpdateExpenseItemCategoryDto } from '../../core/application/dto/update-expense-item-category.dto';
import { Pagination } from '../../../transaction/core/application/dto/pagination.dto';

@Controller('expense-item-categories')
export class ExpenseItemCategoryController {
  constructor(
    private readonly expenseItemCategoryService: ExpenseItemCategoryService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: CreateExpenseItemCategoryRequestDto) {
    const coreDto = new CreateExpenseItemCategoryDto(
      createDto.name,
      createDto.parentId,
    );

    const category = await this.expenseItemCategoryService.create(coreDto);
    return ExpenseItemCategoryResponseDto.fromEntity(category);
  }

  @Get()
  async findAll(
    @Query('parentId') parentId?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const pagination = new Pagination(page, limit);

    const result = await this.expenseItemCategoryService.findAll(
      parentId,
      pagination,
    );

    return {
      data: ExpenseItemCategoryResponseDto.fromEntities(result.data),
      total: result.total,
      page: pagination.page,
      limit: pagination.limit,
    };
  }

  @Get('tree')
  async getTree() {
    const tree = await this.expenseItemCategoryService.getTree();

    // Transform tree to include response DTOs
    const transformTree = (node: any) => ({
      category: ExpenseItemCategoryResponseDto.fromEntity(node.category),
      children: node.children.map(transformTree),
    });

    return tree.map(transformTree);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const category = await this.expenseItemCategoryService.findById(id);
    return ExpenseItemCategoryResponseDto.fromEntity(category);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateExpenseItemCategoryRequestDto,
  ) {
    const coreDto = new UpdateExpenseItemCategoryDto({
      name: updateDto.name,
      parentId: updateDto.parentId,
    });

    const category = await this.expenseItemCategoryService.update(id, coreDto);
    return ExpenseItemCategoryResponseDto.fromEntity(category);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.expenseItemCategoryService.delete(id);
  }
}
