import { Injectable, Inject } from '@nestjs/common';
import {
  type IExpenseItemCategoryRepository,
  PaginatedResult,
} from '../../domain/repositories/expense-item-category.repository.interface';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';

@Injectable()
export class ListExpenseItemCategoriesUseCase {
  constructor(
    @Inject('ExpenseItemCategoryRepository')
    private readonly expenseItemCategoryRepository: IExpenseItemCategoryRepository,
  ) {}

  async execute(
    parentId?: string | null,
    pagination?: Pagination,
  ): Promise<PaginatedResult<ExpenseItemCategory>> {
    if (parentId !== undefined) {
      return this.expenseItemCategoryRepository.findByParentId(
        parentId,
        pagination,
      );
    }

    return this.expenseItemCategoryRepository.findAll(pagination);
  }
}
