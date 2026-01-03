import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { type IItemRepository } from '../../domain/repositories/item.repository.interface';
import { PrismaService } from '../../../../../common/prisma/prisma.service';

@Injectable()
export class DeleteItemUseCase {
  constructor(
    @Inject('ItemRepository')
    private readonly itemRepository: IItemRepository,
    private readonly prisma: PrismaService,
  ) {}

  async execute(id: string): Promise<void> {
    // Check if item exists
    const item = await this.itemRepository.findById(id);
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }

    // Check if item is referenced by StoreItems
    const storeItemCount = await this.prisma.storeItem.count({
      where: { itemId: id },
    });

    if (storeItemCount > 0) {
      throw new BadRequestException(
        `Cannot delete item. It is referenced by ${storeItemCount} store item(s)`,
      );
    }

    await this.itemRepository.delete(id);
  }
}
