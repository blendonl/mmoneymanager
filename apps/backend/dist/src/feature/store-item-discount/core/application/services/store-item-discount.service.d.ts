import { CreateStoreItemDiscountUseCase } from '../use-cases/create-store-item-discount.use-case';
import { GetStoreItemDiscountByIdUseCase } from '../use-cases/get-store-item-discount-by-id.use-case';
import { ListStoreItemDiscountsUseCase } from '../use-cases/list-store-item-discounts.use-case';
import { GetActiveDiscountUseCase } from '../use-cases/get-active-discount.use-case';
import { UpdateStoreItemDiscountUseCase } from '../use-cases/update-store-item-discount.use-case';
import { EndDiscountUseCase } from '../use-cases/end-discount.use-case';
import { DeleteStoreItemDiscountUseCase } from '../use-cases/delete-store-item-discount.use-case';
import { CreateStoreItemDiscountDto } from '../dto/create-store-item-discount.dto';
import { UpdateStoreItemDiscountDto } from '../dto/update-store-item-discount.dto';
import { StoreItemDiscount } from '../../domain/entities/store-item-discount.entity';
import { PaginatedResult } from '../../domain/repositories/store-item-discount.repository.interface';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class StoreItemDiscountService {
    private readonly createStoreItemDiscountUseCase;
    private readonly getStoreItemDiscountByIdUseCase;
    private readonly listStoreItemDiscountsUseCase;
    private readonly getActiveDiscountUseCase;
    private readonly updateStoreItemDiscountUseCase;
    private readonly endDiscountUseCase;
    private readonly deleteStoreItemDiscountUseCase;
    constructor(createStoreItemDiscountUseCase: CreateStoreItemDiscountUseCase, getStoreItemDiscountByIdUseCase: GetStoreItemDiscountByIdUseCase, listStoreItemDiscountsUseCase: ListStoreItemDiscountsUseCase, getActiveDiscountUseCase: GetActiveDiscountUseCase, updateStoreItemDiscountUseCase: UpdateStoreItemDiscountUseCase, endDiscountUseCase: EndDiscountUseCase, deleteStoreItemDiscountUseCase: DeleteStoreItemDiscountUseCase);
    create(dto: CreateStoreItemDiscountDto): Promise<StoreItemDiscount>;
    findById(id: string): Promise<StoreItemDiscount>;
    findByStoreItemId(storeItemId: string, pagination?: Pagination): Promise<PaginatedResult<StoreItemDiscount>>;
    findActive(storeItemId: string): Promise<StoreItemDiscount | null>;
    update(id: string, dto: UpdateStoreItemDiscountDto): Promise<StoreItemDiscount>;
    end(id: string): Promise<StoreItemDiscount>;
    delete(id: string): Promise<void>;
}
