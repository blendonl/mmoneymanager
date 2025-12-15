import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { type IStoreItemRepository } from '../../domain/repositories/store-item.repository.interface';
import { CreateStoreItemDto } from '../dto/create-store-item.dto';
import { StoreItem } from '../../domain/entities/store-item.entity';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace';

@Injectable()
export class CreateOrFindStoreItemUseCase {
  constructor(
    @Inject('StoreItemRepository')
    private readonly storeItemRepository: IStoreItemRepository,
  ) {}

  async execute(dto: CreateStoreItemDto): Promise<StoreItem> {
    this.validate(dto);

    // Try to find existing item by store and name
    const existingItem = await this.storeItemRepository.findByStoreAndName(
      dto.storeId,
      dto.name,
    );

    if (existingItem) {
      // If item exists and price matches, return existing
      const newPrice = new Decimal(dto.price);
      if (existingItem.price.equals(newPrice)) {
        return existingItem;
      }
      // If price differs, create new item (for price history tracking)
    }

    // Create new item
    const item = await this.storeItemRepository.create({
      storeId: dto.storeId,
      name: dto.name,
      price: new Decimal(dto.price),
      isDiscounted: dto.isDiscounted ?? false,
    } as Partial<StoreItem>);

    return item;
  }

  private validate(dto: CreateStoreItemDto): void {
    if (!dto.storeId || dto.storeId.trim() === '') {
      throw new BadRequestException('Store ID is required');
    }

    if (!dto.name || dto.name.trim() === '') {
      throw new BadRequestException('Item name is required');
    }

    if (dto.price < 0) {
      throw new BadRequestException('Item price must be non-negative');
    }
  }
}
