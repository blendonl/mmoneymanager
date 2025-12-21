"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseItem = void 0;
class ExpenseItem {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('Expense item ID is required');
        }
        if (!props.itemId || props.itemId.trim() === '') {
            throw new Error('Item ID is required');
        }
        if (!props.expenseId || props.expenseId.trim() === '') {
            throw new Error('Expense ID is required');
        }
        if (!props.categoryId || props.categoryId.trim() === '') {
            throw new Error('Category ID is required');
        }
        if (!props.price || props.price.toNumber() < 0) {
            throw new Error('Price must be non-negative');
        }
        if (!props.discount || props.discount.toNumber() < 0) {
            throw new Error('Discount must be non-negative');
        }
        if (props.discount.toNumber() > props.price.toNumber()) {
            throw new Error('Discount cannot exceed price');
        }
        if (!props.createdAt) {
            throw new Error('Created date is required');
        }
        if (!props.updatedAt) {
            throw new Error('Updated date is required');
        }
    }
    get id() {
        return this.props.id;
    }
    get itemId() {
        return this.props.itemId;
    }
    get expenseId() {
        return this.props.expenseId;
    }
    get categoryId() {
        return this.props.categoryId;
    }
    get price() {
        return this.props.price;
    }
    get discount() {
        return this.props.discount;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    getFinalPrice() {
        return this.props.price.minus(this.props.discount);
    }
    getDiscountPercentage() {
        if (this.props.price.toNumber() === 0) {
            return 0;
        }
        return (this.props.discount.toNumber() / this.props.price.toNumber()) * 100;
    }
    toJSON() {
        return {
            id: this.props.id,
            itemId: this.props.itemId,
            expenseId: this.props.expenseId,
            categoryId: this.props.categoryId,
            price: this.props.price.toNumber(),
            discount: this.props.discount.toNumber(),
            finalPrice: this.getFinalPrice().toNumber(),
            discountPercentage: this.getDiscountPercentage(),
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        };
    }
}
exports.ExpenseItem = ExpenseItem;
//# sourceMappingURL=expense-item.entity.js.map