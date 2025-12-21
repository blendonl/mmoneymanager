import { Injectable, Inject } from '@nestjs/common';
import { type IStoreItemRepository } from '../../domain/repositories/store-item.repository.interface';
import { StoreItem } from '../../domain/entities/store-item.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';

export interface StoreItemFilters {
  storeId?: string;
}

@Injectable()
export class ListStoreItemsUseCase {
  constructor(
    @Inject('StoreItemRepository')
    private readonly storeItemRepository: IStoreItemRepository,
  ) {}

  async execute(
    filters: StoreItemFilters,
    pagination: Pagination,
  ): Promise<{ data: StoreItem[]; total: number }> {
    if (filters.storeId) {
      return this.storeItemRepository.findByStoreId(
        filters.storeId,
        pagination,
      );
    }
    return this.storeItemRepository.findAll(pagination);
  }
}
