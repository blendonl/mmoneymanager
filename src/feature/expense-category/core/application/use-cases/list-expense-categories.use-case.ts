import { Injectable, Inject } from '@nestjs/common';
import {
  type IExpenseCategoryRepository,
  PaginatedResult,
} from '../../domain/repositories/expense-category.repository.interface';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';

@Injectable()
export class ListExpenseCategoriesUseCase {
  constructor(
    @Inject('ExpenseCategoryRepository')
    private readonly expenseCategoryRepository: IExpenseCategoryRepository,
  ) {}

  async execute(
    parentId?: string | null,
    pagination?: Pagination,
  ): Promise<PaginatedResult<ExpenseCategory>> {
    if (parentId !== undefined) {
      return this.expenseCategoryRepository.findByParentId(
        parentId,
        pagination,
      );
    }

    return this.expenseCategoryRepository.findAll(pagination);
  }
}
