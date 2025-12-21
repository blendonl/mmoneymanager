import { Injectable } from '@nestjs/common';
import { CreateIncomeCategoryUseCase } from '../use-cases/create-income-category.use-case';
import { GetIncomeCategoryByIdUseCase } from '../use-cases/get-income-category-by-id.use-case';
import { ListIncomeCategoriesUseCase } from '../use-cases/list-income-categories.use-case';
import { GetIncomeCategoryTreeUseCase, IncomeCategoryTree } from '../use-cases/get-income-category-tree.use-case';
import { UpdateIncomeCategoryUseCase } from '../use-cases/update-income-category.use-case';
import { DeleteIncomeCategoryUseCase } from '../use-cases/delete-income-category.use-case';
import { CreateIncomeCategoryDto } from '../dto/create-income-category.dto';
import { UpdateIncomeCategoryDto } from '../dto/update-income-category.dto';
import { IncomeCategory } from '../../domain/entities/income-category.entity';
import { PaginatedResult } from '../../domain/repositories/income-category.repository.interface';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';

@Injectable()
export class IncomeCategoryService {
  constructor(
    private readonly createIncomeCategoryUseCase: CreateIncomeCategoryUseCase,
    private readonly getIncomeCategoryByIdUseCase: GetIncomeCategoryByIdUseCase,
    private readonly listIncomeCategoriesUseCase: ListIncomeCategoriesUseCase,
    private readonly getIncomeCategoryTreeUseCase: GetIncomeCategoryTreeUseCase,
    private readonly updateIncomeCategoryUseCase: UpdateIncomeCategoryUseCase,
    private readonly deleteIncomeCategoryUseCase: DeleteIncomeCategoryUseCase,
  ) {}

  async create(dto: CreateIncomeCategoryDto): Promise<IncomeCategory> {
    return this.createIncomeCategoryUseCase.execute(dto);
  }

  async findById(id: string): Promise<IncomeCategory> {
    return this.getIncomeCategoryByIdUseCase.execute(id);
  }

  async findAll(
    parentId?: string | null,
    pagination?: Pagination,
  ): Promise<PaginatedResult<IncomeCategory>> {
    return this.listIncomeCategoriesUseCase.execute(parentId, pagination);
  }

  async getTree(): Promise<IncomeCategoryTree[]> {
    return this.getIncomeCategoryTreeUseCase.execute();
  }

  async update(
    id: string,
    dto: UpdateIncomeCategoryDto,
  ): Promise<IncomeCategory> {
    return this.updateIncomeCategoryUseCase.execute(id, dto);
  }

  async delete(id: string): Promise<void> {
    return this.deleteIncomeCategoryUseCase.execute(id);
  }
}
