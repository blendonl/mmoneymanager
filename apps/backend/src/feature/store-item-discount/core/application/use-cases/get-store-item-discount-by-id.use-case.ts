import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { type IStoreItemDiscountRepository } from '../../domain/repositories/store-item-discount.repository.interface';
import { StoreItemDiscount } from '../../domain/entities/store-item-discount.entity';

@Injectable()
export class GetStoreItemDiscountByIdUseCase {
  constructor(
    @Inject('StoreItemDiscountRepository')
    private readonly discountRepository: IStoreItemDiscountRepository,
  ) {}

  async execute(id: string): Promise<StoreItemDiscount> {
    const discount = await this.discountRepository.findById(id);

    if (!discount) {
      throw new NotFoundException(`Discount with ID ${id} not found`);
    }

    return discount;
  }
}
