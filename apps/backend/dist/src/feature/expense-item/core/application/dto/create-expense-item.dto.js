"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExpenseItemDto = void 0;
class CreateExpenseItemDto {
    expenseId;
    categoryId;
    itemName;
    itemPrice;
    discount;
    itemId;
    constructor(data) {
        this.expenseId = data.expenseId;
        this.categoryId = data.categoryId;
        this.itemName = data.itemName;
        this.itemPrice = data.itemPrice;
        this.discount = data.discount ?? 0;
        this.itemId = data.itemId;
    }
}
exports.CreateExpenseItemDto = CreateExpenseItemDto;
//# sourceMappingURL=create-expense-item.dto.js.map