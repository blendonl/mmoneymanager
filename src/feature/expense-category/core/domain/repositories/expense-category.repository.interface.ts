import { ExpenseCategory } from '../entities/expense-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';

export interface PaginatedResult<T> {
  data: T[];
  total: number;
}

export interface IExpenseCategoryRepository {
  create(data: Partial<ExpenseCategory>): Promise<ExpenseCategory>;
  findById(id: string): Promise<ExpenseCategory | null>;
  findByName(name: string): Promise<ExpenseCategory | null>;
  findAll(pagination?: Pagination): Promise<PaginatedResult<ExpenseCategory>>;
  findByParentId(
    parentId: string | null,
    pagination?: Pagination,
  ): Promise<PaginatedResult<ExpenseCategory>>;
  findChildren(parentId: string): Promise<ExpenseCategory[]>;
  update(
    id: string,
    data: Partial<ExpenseCategory>,
  ): Promise<ExpenseCategory>;
  delete(id: string): Promise<void>;
}
