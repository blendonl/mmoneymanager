import { Module } from '@nestjs/common';
import { StoreItemDiscountCoreModule } from '../core/store-item-discount-core.module';
import { StoreItemDiscountController } from './controllers/store-item-discount.controller';

@Module({
  imports: [StoreItemDiscountCoreModule],
  controllers: [StoreItemDiscountController],
})
export class StoreItemDiscountRestModule {}
