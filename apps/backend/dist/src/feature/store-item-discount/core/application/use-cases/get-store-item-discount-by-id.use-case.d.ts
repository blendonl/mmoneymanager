import { type IStoreItemDiscountRepository } from '../../domain/repositories/store-item-discount.repository.interface';
import { StoreItemDiscount } from '../../domain/entities/store-item-discount.entity';
export declare class GetStoreItemDiscountByIdUseCase {
    private readonly discountRepository;
    constructor(discountRepository: IStoreItemDiscountRepository);
    execute(id: string): Promise<StoreItemDiscount>;
}
