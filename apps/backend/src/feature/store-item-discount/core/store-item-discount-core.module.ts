import { Module } from '@nestjs/common';
import { PrismaModule } from '../../../common/prisma/prisma.module';
import { StoreCoreModule } from '../../store/core/store-core.module';
import { PrismaStoreItemDiscountRepository } from './infrastructure/repositories/prisma-store-item-discount.repository';
import { CreateStoreItemDiscountUseCase } from './application/use-cases/create-store-item-discount.use-case';
import { GetStoreItemDiscountByIdUseCase } from './application/use-cases/get-store-item-discount-by-id.use-case';
import { ListStoreItemDiscountsUseCase } from './application/use-cases/list-store-item-discounts.use-case';
import { GetActiveDiscountUseCase } from './application/use-cases/get-active-discount.use-case';
import { UpdateStoreItemDiscountUseCase } from './application/use-cases/update-store-item-discount.use-case';
import { EndDiscountUseCase } from './application/use-cases/end-discount.use-case';
import { DeleteStoreItemDiscountUseCase } from './application/use-cases/delete-store-item-discount.use-case';
import { StoreItemDiscountService } from './application/services/store-item-discount.service';

@Module({
  imports: [PrismaModule, StoreCoreModule],
  providers: [
    {
      provide: 'StoreItemDiscountRepository',
      useClass: PrismaStoreItemDiscountRepository,
    },
    CreateStoreItemDiscountUseCase,
    GetStoreItemDiscountByIdUseCase,
    ListStoreItemDiscountsUseCase,
    GetActiveDiscountUseCase,
    UpdateStoreItemDiscountUseCase,
    EndDiscountUseCase,
    DeleteStoreItemDiscountUseCase,
    StoreItemDiscountService,
  ],
  exports: [StoreItemDiscountService, 'StoreItemDiscountRepository'],
})
export class StoreItemDiscountCoreModule {}
