"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExpenseItemDto = void 0;
class UpdateExpenseItemDto {
    categoryId;
    price;
    discount;
    constructor(data) {
        this.categoryId = data.categoryId;
        this.price = data.price;
        this.discount = data.discount;
    }
}
exports.UpdateExpenseItemDto = UpdateExpenseItemDto;
//# sourceMappingURL=update-expense-item.dto.js.map