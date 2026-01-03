import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { type IStoreItemDiscountRepository } from '../../domain/repositories/store-item-discount.repository.interface';
import { type IStoreItemRepository } from '../../../../store/core/domain/repositories/store-item.repository.interface';
import { CreateStoreItemDiscountDto } from '../dto/create-store-item-discount.dto';
import { StoreItemDiscount } from '../../domain/entities/store-item-discount.entity';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace';

@Injectable()
export class CreateStoreItemDiscountUseCase {
  constructor(
    @Inject('StoreItemDiscountRepository')
    private readonly discountRepository: IStoreItemDiscountRepository,
    @Inject('StoreItemRepository')
    private readonly storeItemRepository: IStoreItemRepository,
  ) {}

  async execute(dto: CreateStoreItemDiscountDto): Promise<StoreItemDiscount> {
    await this.validate(dto);

    // End any existing active discount
    const activeDiscount =
      await this.discountRepository.findActiveByStoreItemId(dto.storeItemId);
    if (activeDiscount) {
      await this.discountRepository.endDiscount(activeDiscount.id);
    }

    // Create new discount
    const discount = await this.discountRepository.create({
      storeItemId: dto.storeItemId,
      discount: new Decimal(dto.discount),
      startedAt: dto.startedAt ?? new Date(),
    } as Partial<StoreItemDiscount>);

    // Update StoreItem.isDiscounted flag
    await this.storeItemRepository.update(dto.storeItemId, {
      isDiscounted: true,
    } as any);

    return discount;
  }

  private async validate(dto: CreateStoreItemDiscountDto): Promise<void> {
    if (!dto.storeItemId || dto.storeItemId.trim() === '') {
      throw new BadRequestException('Store item ID is required');
    }

    if (dto.discount <= 0) {
      throw new BadRequestException('Discount must be greater than 0');
    }

    // Validate store item exists
    const storeItem = await this.storeItemRepository.findById(dto.storeItemId);
    if (!storeItem) {
      throw new BadRequestException('Store item not found');
    }

    // Validate discount amount is not greater than price
    if (dto.discount > storeItem.price.toNumber()) {
      throw new BadRequestException(
        'Discount amount cannot be greater than item price',
      );
    }
  }
}
