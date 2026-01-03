import { type IStoreItemDiscountRepository } from '../../domain/repositories/store-item-discount.repository.interface';
import { UpdateStoreItemDiscountDto } from '../dto/update-store-item-discount.dto';
import { StoreItemDiscount } from '../../domain/entities/store-item-discount.entity';
export declare class UpdateStoreItemDiscountUseCase {
    private readonly discountRepository;
    constructor(discountRepository: IStoreItemDiscountRepository);
    execute(id: string, dto: UpdateStoreItemDiscountDto): Promise<StoreItemDiscount>;
    private validate;
}
