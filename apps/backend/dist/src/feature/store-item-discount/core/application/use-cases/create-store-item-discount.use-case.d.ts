import { type IStoreItemDiscountRepository } from '../../domain/repositories/store-item-discount.repository.interface';
import { type IStoreItemRepository } from '../../../../store/core/domain/repositories/store-item.repository.interface';
import { CreateStoreItemDiscountDto } from '../dto/create-store-item-discount.dto';
import { StoreItemDiscount } from '../../domain/entities/store-item-discount.entity';
export declare class CreateStoreItemDiscountUseCase {
    private readonly discountRepository;
    private readonly storeItemRepository;
    constructor(discountRepository: IStoreItemDiscountRepository, storeItemRepository: IStoreItemRepository);
    execute(dto: CreateStoreItemDiscountDto): Promise<StoreItemDiscount>;
    private validate;
}
