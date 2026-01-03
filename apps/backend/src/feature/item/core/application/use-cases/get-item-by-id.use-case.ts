import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { type IItemRepository } from '../../domain/repositories/item.repository.interface';
import { Item } from '../../domain/entities/item.entity';

@Injectable()
export class GetItemByIdUseCase {
  constructor(
    @Inject('ItemRepository')
    private readonly itemRepository: IItemRepository,
  ) {}

  async execute(id: string): Promise<Item> {
    const item = await this.itemRepository.findById(id);

    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }

    return item;
  }
}
