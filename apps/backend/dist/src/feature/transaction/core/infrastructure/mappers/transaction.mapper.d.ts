import { Transaction as PrismaTransaction } from 'prisma/generated/prisma/client';
import { Transaction } from '../../domain/entities/transaction.entity';
import { TransactionType } from '../../domain/value-objects/transaction-type.vo';
export declare class TransactionMapper {
    static toDomain(prismaTransaction: PrismaTransaction): Transaction;
    static toPersistence(transaction: Transaction): {
        id: string;
        userId: string;
        type: TransactionType;
        value: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        updatedAt: Date;
    };
}
