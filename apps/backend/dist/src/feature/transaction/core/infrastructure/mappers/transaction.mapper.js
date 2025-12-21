"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionMapper = void 0;
const transaction_entity_1 = require("../../domain/entities/transaction.entity");
class TransactionMapper {
    static toDomain(prismaTransaction) {
        return new transaction_entity_1.Transaction({
            id: prismaTransaction.id,
            userId: prismaTransaction.userId,
            type: prismaTransaction.type,
            value: prismaTransaction.value,
            createdAt: prismaTransaction.createdAt,
            updatedAt: prismaTransaction.updatedAt,
        });
    }
    static toPersistence(transaction) {
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
exports.TransactionMapper = TransactionMapper;
//# sourceMappingURL=transaction.mapper.js.map