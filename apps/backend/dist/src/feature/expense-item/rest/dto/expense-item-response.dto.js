"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseItemResponseDto = void 0;
class ExpenseItemResponseDto {
    id;
    itemId;
    name;
    expenseId;
    categoryId;
    price;
    discount;
    finalPrice;
    discountPercentage;
    quantity;
    createdAt;
    updatedAt;
    static fromEntity(item) {
        const dto = new ExpenseItemResponseDto();
        dto.id = item.id;
        dto.itemId = item.itemId;
        dto.name = item.itemName;
        dto.expenseId = item.expenseId;
        dto.categoryId = item.categoryId;
        dto.price = item.price.toNumber();
        dto.discount = item.discount.toNumber();
        dto.finalPrice = item.getFinalPrice().toNumber();
        dto.discountPercentage = item.getDiscountPercentage();
        dto.createdAt = item.createdAt;
        dto.updatedAt = item.updatedAt;
        dto.quantity = item.quantity;
        return dto;
    }
    static fromEntities(items) {
        return items.map((item) => this.fromEntity(item));
    }
}
exports.ExpenseItemResponseDto = ExpenseItemResponseDto;
//# sourceMappingURL=expense-item-response.dto.js.map