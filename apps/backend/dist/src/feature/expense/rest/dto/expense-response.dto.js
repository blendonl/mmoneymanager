"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseResponseDto = void 0;
const rest_1 = require("../../../transaction/rest");
const expense_category_response_dto_1 = require("../../../expense-category/rest/dto/expense-category-response.dto");
const store_response_dto_1 = require("../../../store/rest/dto/store-response.dto");
class ExpenseResponseDto {
    id;
    transactionId;
    categoryId;
    storeId;
    transaction;
    category;
    store;
    name;
    createdAt;
    updatedAt;
    static fromEntity(expense) {
        const dto = new ExpenseResponseDto();
        dto.id = expense.id;
        dto.transactionId = expense.transactionId;
        dto.categoryId = expense.categoryId;
        dto.storeId = expense.storeId;
        dto.createdAt = expense.createdAt;
        dto.updatedAt = expense.updatedAt;
        dto.category = expense_category_response_dto_1.ExpenseCategoryResponseDto.fromEntity(expense.category);
        dto.transaction = rest_1.TransactionResponseDto.fromEntity(expense.transaction);
        dto.store = store_response_dto_1.StoreResponseDto.fromEntity(expense.store);
        return dto;
    }
    static fromEntities(expenses) {
        return expenses.map((expense) => this.fromEntity(expense));
    }
}
exports.ExpenseResponseDto = ExpenseResponseDto;
//# sourceMappingURL=expense-response.dto.js.map