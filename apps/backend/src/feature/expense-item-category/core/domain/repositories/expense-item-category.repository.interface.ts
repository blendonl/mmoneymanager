import { ExpenseItemCategory } from '../entities/expense-item-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';

export interface PaginatedResult<T> {
  data: T[];
  total: number;
}

export interface IExpenseItemCategoryRepository {
  create(data: Partial<ExpenseItemCategory>): Promise<ExpenseItemCategory>;
  findById(id: string): Promise<ExpenseItemCategory | null>;
  findAll(pagination?: Pagination): Promise<PaginatedResult<ExpenseItemCategory>>;
  findByParentId(
    parentId: string | null,
    pagination?: Pagination,
  ): Promise<PaginatedResult<ExpenseItemCategory>>;
  findChildren(parentId: string): Promise<ExpenseItemCategory[]>;
  update(
    id: string,
    data: Partial<ExpenseItemCategory>,
  ): Promise<ExpenseItemCategory>;
  delete(id: string): Promise<void>;
}
