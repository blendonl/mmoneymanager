import { StoreItemDiscount } from '../../core/domain/entities/store-item-discount.entity';
export declare class StoreItemDiscountResponseDto {
    id: string;
    storeItemId: string;
    discount: number;
    startedAt: Date;
    endedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    static fromEntity(discount: StoreItemDiscount): StoreItemDiscountResponseDto;
    static fromEntities(discounts: StoreItemDiscount[]): StoreItemDiscountResponseDto[];
}
