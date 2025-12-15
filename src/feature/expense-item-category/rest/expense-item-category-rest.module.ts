import { Module } from '@nestjs/common';
import { ExpenseItemCategoryCoreModule } from '../core/expense-item-category-core.module';
import { ExpenseItemCategoryController } from './controllers/expense-item-category.controller';

@Module({
  imports: [ExpenseItemCategoryCoreModule],
  controllers: [ExpenseItemCategoryController],
})
export class ExpenseItemCategoryRestModule {}
