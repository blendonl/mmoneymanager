import { StoreItemDiscount } from '../../core/domain/entities/store-item-discount.entity';

export class StoreItemDiscountResponseDto {
  id: string;
  storeItemId: string;
  discount: number;
  startedAt: Date;
  endedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;

  static fromEntity(
    discount: StoreItemDiscount,
  ): StoreItemDiscountResponseDto {
    return {
      id: discount.id,
      storeItemId: discount.storeItemId,
      discount: discount.discount.toNumber(),
      startedAt: discount.startedAt,
      endedAt: discount.endedAt,
      createdAt: discount.createdAt,
      updatedAt: discount.updatedAt,
      isActive: discount.isActive(),
    };
  }

  static fromEntities(
    discounts: StoreItemDiscount[],
  ): StoreItemDiscountResponseDto[] {
    return discounts.map((discount) => this.fromEntity(discount));
  }
}
