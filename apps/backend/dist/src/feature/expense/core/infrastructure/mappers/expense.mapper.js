"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseMapper = void 0;
const expense_entity_1 = require("../../domain/entities/expense.entity");
const transaction_mapper_1 = require("../../../../transaction/core/infrastructure/mappers/transaction.mapper");
const store_mapper_1 = require("../../../../store/core/infrastructure/mappers/store.mapper");
const expense_category_mapper_1 = require("../../../../expense-category/core/infrastructure/mappers/expense-category.mapper");
const expense_item_mapper_1 = require("../../../../expense-item/core/infrastructure/mappers/expense-item.mapper");
class ExpenseMapper {
    static toDomain(prismaExpense) {
        return new expense_entity_1.Expense({
            id: prismaExpense.id,
            transactionId: prismaExpense.transactionId,
            transaction: transaction_mapper_1.TransactionMapper.toDomain(prismaExpense.transaction),
            store: store_mapper_1.StoreMapper.toDomain(prismaExpense.store),
            category: expense_category_mapper_1.ExpenseCategoryMapper.toDomain(prismaExpense.category),
            storeId: prismaExpense.storeId,
            categoryId: prismaExpense.categoryId,
            items: prismaExpense.items.map(expense_item_mapper_1.ExpenseItemMapper.toDomain),
            createdAt: prismaExpense.createdAt,
            updatedAt: prismaExpense.updatedAt,
        });
    }
    static toPersistence(expense) {
        return {
            id: expense.id,
            transactionId: expense.transactionId,
            storeId: expense.storeId,
            categoryId: expense.categoryId,
            createdAt: expense.createdAt,
            updatedAt: expense.updatedAt,
        };
    }
}
exports.ExpenseMapper = ExpenseMapper;
//# sourceMappingURL=expense.mapper.js.map