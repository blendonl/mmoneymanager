import { Module } from '@nestjs/common';
import { ExpenseCategoryCoreModule } from '../core/expense-category-core.module';
import { ExpenseCategoryController } from './controllers/expense-category.controller';

@Module({
  imports: [ExpenseCategoryCoreModule],
  controllers: [ExpenseCategoryController],
})
export class ExpenseCategoryRestModule {}
