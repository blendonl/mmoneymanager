import { IncomeCategory } from '../entities/income-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';

export interface PaginatedResult<T> {
  data: T[];
  total: number;
}

export interface IIncomeCategoryRepository {
  create(data: Partial<IncomeCategory>): Promise<IncomeCategory>;
  findById(id: string): Promise<IncomeCategory | null>;
  findAll(pagination?: Pagination): Promise<PaginatedResult<IncomeCategory>>;
  findByParentId(
    parentId: string | null,
    pagination?: Pagination,
  ): Promise<PaginatedResult<IncomeCategory>>;
  findChildren(parentId: string): Promise<IncomeCategory[]>;
  update(
    id: string,
    data: Partial<IncomeCategory>,
  ): Promise<IncomeCategory>;
  delete(id: string): Promise<void>;
}
