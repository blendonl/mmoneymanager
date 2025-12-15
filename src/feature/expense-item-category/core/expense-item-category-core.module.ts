import { Module } from '@nestjs/common';
import { PrismaModule } from '../../../common/prisma/prisma.module';
import { PrismaExpenseItemCategoryRepository } from './infrastructure/repositories/prisma-expense-item-category.repository';
import { CreateExpenseItemCategoryUseCase } from './application/use-cases/create-expense-item-category.use-case';
import { GetExpenseItemCategoryByIdUseCase } from './application/use-cases/get-expense-item-category-by-id.use-case';
import { ListExpenseItemCategoriesUseCase } from './application/use-cases/list-expense-item-categories.use-case';
import { GetItemCategoryTreeUseCase } from './application/use-cases/get-item-category-tree.use-case';
import { UpdateExpenseItemCategoryUseCase } from './application/use-cases/update-expense-item-category.use-case';
import { DeleteExpenseItemCategoryUseCase } from './application/use-cases/delete-expense-item-category.use-case';
import { ExpenseItemCategoryService } from './application/services/expense-item-category.service';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: 'ExpenseItemCategoryRepository',
      useClass: PrismaExpenseItemCategoryRepository,
    },
    CreateExpenseItemCategoryUseCase,
    GetExpenseItemCategoryByIdUseCase,
    ListExpenseItemCategoriesUseCase,
    GetItemCategoryTreeUseCase,
    UpdateExpenseItemCategoryUseCase,
    DeleteExpenseItemCategoryUseCase,
    ExpenseItemCategoryService,
  ],
  exports: [ExpenseItemCategoryService, 'ExpenseItemCategoryRepository'],
})
export class ExpenseItemCategoryCoreModule {}
