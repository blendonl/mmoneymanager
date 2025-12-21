import { Injectable, Inject } from '@nestjs/common';
import {
  type IIncomeRepository,
  PaginatedResult,
} from '../../domain/repositories/income.repository.interface';
import { Income } from '../../domain/entities/income.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';

@Injectable()
export class ListIncomesUseCase {
  constructor(
    @Inject('IncomeRepository')
    private readonly incomeRepository: IIncomeRepository,
  ) {}

  async execute(
    storeId?: string,
    pagination?: Pagination,
  ): Promise<PaginatedResult<Income>> {
    if (storeId) {
      return this.incomeRepository.findByStoreId(storeId, pagination);
    }

    return this.incomeRepository.findAll(pagination);
  }
}
