import { Injectable } from '@nestjs/common';
import { CreateExpenseItemCategoryUseCase } from '../use-cases/create-expense-item-category.use-case';
import { GetExpenseItemCategoryByIdUseCase } from '../use-cases/get-expense-item-category-by-id.use-case';
import { ListExpenseItemCategoriesUseCase } from '../use-cases/list-expense-item-categories.use-case';
import { GetItemCategoryTreeUseCase, ItemCategoryTree } from '../use-cases/get-item-category-tree.use-case';
import { UpdateExpenseItemCategoryUseCase } from '../use-cases/update-expense-item-category.use-case';
import { DeleteExpenseItemCategoryUseCase } from '../use-cases/delete-expense-item-category.use-case';
import { CreateExpenseItemCategoryDto } from '../dto/create-expense-item-category.dto';
import { UpdateExpenseItemCategoryDto } from '../dto/update-expense-item-category.dto';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';
import { PaginatedResult } from '../../domain/repositories/expense-item-category.repository.interface';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';

@Injectable()
export class ExpenseItemCategoryService {
  constructor(
    private readonly createExpenseItemCategoryUseCase: CreateExpenseItemCategoryUseCase,
    private readonly getExpenseItemCategoryByIdUseCase: GetExpenseItemCategoryByIdUseCase,
    private readonly listExpenseItemCategoriesUseCase: ListExpenseItemCategoriesUseCase,
    private readonly getItemCategoryTreeUseCase: GetItemCategoryTreeUseCase,
    private readonly updateExpenseItemCategoryUseCase: UpdateExpenseItemCategoryUseCase,
    private readonly deleteExpenseItemCategoryUseCase: DeleteExpenseItemCategoryUseCase,
  ) {}

  async create(dto: CreateExpenseItemCategoryDto): Promise<ExpenseItemCategory> {
    return this.createExpenseItemCategoryUseCase.execute(dto);
  }

  async findById(id: string): Promise<ExpenseItemCategory> {
    return this.getExpenseItemCategoryByIdUseCase.execute(id);
  }

  async findAll(
    parentId?: string | null,
    pagination?: Pagination,
  ): Promise<PaginatedResult<ExpenseItemCategory>> {
    return this.listExpenseItemCategoriesUseCase.execute(parentId, pagination);
  }

  async getTree(): Promise<ItemCategoryTree[]> {
    return this.getItemCategoryTreeUseCase.execute();
  }

  async update(
    id: string,
    dto: UpdateExpenseItemCategoryDto,
  ): Promise<ExpenseItemCategory> {
    return this.updateExpenseItemCategoryUseCase.execute(id, dto);
  }

  async delete(id: string): Promise<void> {
    return this.deleteExpenseItemCategoryUseCase.execute(id);
  }
}
