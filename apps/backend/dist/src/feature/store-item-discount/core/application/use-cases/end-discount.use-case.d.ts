import { type IStoreItemDiscountRepository } from '../../domain/repositories/store-item-discount.repository.interface';
import { type IStoreItemRepository } from '../../../../store/core/domain/repositories/store-item.repository.interface';
import { StoreItemDiscount } from '../../domain/entities/store-item-discount.entity';
export declare class EndDiscountUseCase {
    private readonly discountRepository;
    private readonly storeItemRepository;
    constructor(discountRepository: IStoreItemDiscountRepository, storeItemRepository: IStoreItemRepository);
    execute(id: string): Promise<StoreItemDiscount>;
}
