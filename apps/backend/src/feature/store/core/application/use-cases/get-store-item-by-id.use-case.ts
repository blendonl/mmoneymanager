import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { type IStoreItemRepository } from '../../domain/repositories/store-item.repository.interface';
import { StoreItem } from '../../domain/entities/store-item.entity';

@Injectable()
export class GetStoreItemByIdUseCase {
  constructor(
    @Inject('StoreItemRepository')
    private readonly storeItemRepository: IStoreItemRepository,
  ) {}

  async execute(id: string): Promise<StoreItem> {
    const item = await this.storeItemRepository.findById(id);

    if (!item) {
      throw new NotFoundException('Store item not found');
    }

    return item;
  }
}
