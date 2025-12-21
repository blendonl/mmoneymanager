import { Module } from '@nestjs/common';
import { StoreCoreModule } from '../core/store-core.module';
import { StoreController } from './controllers/store.controller';
import { StoreItemController } from './controllers/store-item.controller';

@Module({
  imports: [StoreCoreModule],
  controllers: [StoreController, StoreItemController],
})
export class StoreRestModule {}
