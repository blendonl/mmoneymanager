import { type IStoreItemDiscountRepository } from '../../domain/repositories/store-item-discount.repository.interface';
export declare class DeleteStoreItemDiscountUseCase {
    private readonly discountRepository;
    constructor(discountRepository: IStoreItemDiscountRepository);
    execute(id: string): Promise<void>;
}
