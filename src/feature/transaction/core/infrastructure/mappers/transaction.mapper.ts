import { Transaction as PrismaTransaction } from 'prisma/generated/prisma/client';
import { Transaction } from '../../domain/entities/transaction.entity';
import { TransactionType } from '../../domain/value-objects/transaction-type.vo';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace';

export class TransactionMapper {
  static toDomain(prismaTransaction: PrismaTransaction): Transaction {
    return new Transaction({
      id: prismaTransaction.id,
      userId: prismaTransaction.userId,
      type: prismaTransaction.type as TransactionType,
      value: prismaTransaction.value as Decimal,
      createdAt: prismaTransaction.createdAt,
      updatedAt: prismaTransaction.updatedAt,
    });
  }

  static toPersistence(transaction: Transaction) {
    return {
      id: transaction.id,
      userId: transaction.userId,
      type: transaction.type,
      value: transaction.value,
      createdAt: transaction.createdAt,
      updatedAt: transaction.updatedAt,
    };
  }
}
