import { Injectable, Inject } from '@nestjs/common';
import { type IStoreItemDiscountRepository } from '../../domain/repositories/store-item-discount.repository.interface';
import { StoreItemDiscount } from '../../domain/entities/store-item-discount.entity';

@Injectable()
export class GetActiveDiscountUseCase {
  constructor(
    @Inject('StoreItemDiscountRepository')
    private readonly discountRepository: IStoreItemDiscountRepository,
  ) {}

  async execute(storeItemId: string): Promise<StoreItemDiscount | null> {
    return await this.discountRepository.findActiveByStoreItemId(storeItemId);
  }
}
