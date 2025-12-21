import { Module } from '@nestjs/common';
import { ExpenseItemCoreModule } from '../core/expense-item-core.module';
import { ExpenseItemController } from './controllers/expense-item.controller';

@Module({
  imports: [ExpenseItemCoreModule],
  controllers: [ExpenseItemController],
})
export class ExpenseItemRestModule {}
