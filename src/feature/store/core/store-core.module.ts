import { Module } from '@nestjs/common';
import { PrismaModule } from '../../../common/prisma/prisma.module';
import { PrismaStoreRepository } from './infrastructure/repositories/prisma-store.repository';
import { PrismaStoreItemRepository } from './infrastructure/repositories/prisma-store-item.repository';
import { CreateOrFindStoreUseCase } from './application/use-cases/create-or-find-store.use-case';
import { GetStoreByIdUseCase } from './application/use-cases/get-store-by-id.use-case';
import { CreateOrFindStoreItemUseCase } from './application/use-cases/create-or-find-store-item.use-case';
import { GetStoreItemByIdUseCase } from './application/use-cases/get-store-item-by-id.use-case';
import { StoreService } from './application/services/store.service';
import { StoreItemService } from './application/services/store-item.service';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: 'StoreRepository',
      useClass: PrismaStoreRepository,
    },
    {
      provide: 'StoreItemRepository',
      useClass: PrismaStoreItemRepository,
    },
    CreateOrFindStoreUseCase,
    GetStoreByIdUseCase,
    CreateOrFindStoreItemUseCase,
    GetStoreItemByIdUseCase,
    StoreService,
    StoreItemService,
  ],
  exports: [StoreService, StoreItemService],
})
export class StoreCoreModule {}
