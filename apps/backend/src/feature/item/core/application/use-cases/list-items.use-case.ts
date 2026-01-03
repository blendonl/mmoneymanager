import { Injectable, Inject } from '@nestjs/common';
import {
  type IItemRepository,
  PaginatedResult,
} from '../../domain/repositories/item.repository.interface';
import { Item } from '../../domain/entities/item.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';

@Injectable()
export class ListItemsUseCase {
  constructor(
    @Inject('ItemRepository')
    private readonly itemRepository: IItemRepository,
  ) {}

  async execute(
    categoryId?: string,
    pagination?: Pagination,
  ): Promise<PaginatedResult<Item>> {
    if (categoryId) {
      return await this.itemRepository.findByCategoryId(
        categoryId,
        pagination,
      );
    }

    return await this.itemRepository.findAll(pagination);
  }
}
