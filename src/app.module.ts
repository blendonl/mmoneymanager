import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './common/prisma/prisma.module';
import { TransactionRestModule } from './feature/transaction/rest/transaction-rest.module';
import { ExpenseCategoryRestModule } from './feature/expense-category/rest/expense-category-rest.module';
import { ExpenseItemCategoryRestModule } from './feature/expense-item-category/rest/expense-item-category-rest.module';
import { ExpenseItemRestModule } from './feature/expense-item/rest/expense-item-rest.module';
import { ExpenseRestModule } from './feature/expense/rest/expense-rest.module';

@Module({
  imports: [
    PrismaModule,
    TransactionRestModule,
    ExpenseCategoryRestModule,
    ExpenseItemCategoryRestModule,
    ExpenseItemRestModule,
    ExpenseRestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
