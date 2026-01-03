import { StoreItemDiscountService } from '../../core/application/services/store-item-discount.service';
import { CreateStoreItemDiscountRequestDto } from '../dto/create-store-item-discount-request.dto';
import { UpdateStoreItemDiscountRequestDto } from '../dto/update-store-item-discount-request.dto';
import { StoreItemDiscountResponseDto } from '../dto/store-item-discount-response.dto';
export declare class StoreItemDiscountController {
    private readonly storeItemDiscountService;
    constructor(storeItemDiscountService: StoreItemDiscountService);
    create(storeItemId: string, createDto: CreateStoreItemDiscountRequestDto): Promise<StoreItemDiscountResponseDto>;
    findAll(storeItemId: string, page?: number, limit?: number): Promise<{
        data: StoreItemDiscountResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getActive(storeItemId: string): Promise<StoreItemDiscountResponseDto | null>;
    findOne(id: string): Promise<StoreItemDiscountResponseDto>;
    update(id: string, updateDto: UpdateStoreItemDiscountRequestDto): Promise<StoreItemDiscountResponseDto>;
    end(id: string): Promise<StoreItemDiscountResponseDto>;
    delete(id: string): Promise<void>;
}
