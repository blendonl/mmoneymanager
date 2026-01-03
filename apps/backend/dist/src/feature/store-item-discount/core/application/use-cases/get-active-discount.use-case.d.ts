import { type IStoreItemDiscountRepository } from '../../domain/repositories/store-item-discount.repository.interface';
import { StoreItemDiscount } from '../../domain/entities/store-item-discount.entity';
export declare class GetActiveDiscountUseCase {
    private readonly discountRepository;
    constructor(discountRepository: IStoreItemDiscountRepository);
    execute(storeItemId: string): Promise<StoreItemDiscount | null>;
}
