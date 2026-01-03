import { type IStoreItemDiscountRepository, PaginatedResult } from '../../domain/repositories/store-item-discount.repository.interface';
import { StoreItemDiscount } from '../../domain/entities/store-item-discount.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class ListStoreItemDiscountsUseCase {
    private readonly discountRepository;
    constructor(discountRepository: IStoreItemDiscountRepository);
    execute(storeItemId: string, pagination?: Pagination): Promise<PaginatedResult<StoreItemDiscount>>;
}
