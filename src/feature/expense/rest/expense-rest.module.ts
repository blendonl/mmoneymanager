import { Module } from '@nestjs/common';
import { ExpenseCoreModule } from '../core/expense-core.module';
import { ExpenseController } from './controllers/expense.controller';

@Module({
  imports: [ExpenseCoreModule],
  controllers: [ExpenseController],
})
export class ExpenseRestModule {}
