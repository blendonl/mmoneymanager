import { Module } from '@nestjs/common';
import { ItemCoreModule } from '../core/item-core.module';
import { ItemController } from './controllers/item.controller';

@Module({
  imports: [ItemCoreModule],
  controllers: [ItemController],
})
export class ItemRestModule {}
