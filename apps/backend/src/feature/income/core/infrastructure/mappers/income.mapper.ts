import { Income as PrismaIncome } from 'prisma/generated/prisma/client';
import { Income } from '../../domain/entities/income.entity';

export class IncomeMapper {
  static toDomain(prismaIncome: PrismaIncome): Income {
    return new Income({
      id: prismaIncome.id,
      transactionId: prismaIncome.transactionId,
      storeId: prismaIncome.storeId,
      categoryId: prismaIncome.categoryId,
      createdAt: prismaIncome.createdAt,
      updatedAt: prismaIncome.updatedAt,
    });
  }

  static toPersistence(income: Income) {
    return {
      id: income.id,
      transactionId: income.transactionId,
      storeId: income.storeId,
      categoryId: income.categoryId,
      createdAt: income.createdAt,
      updatedAt: income.updatedAt,
    };
  }
}
