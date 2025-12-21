"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expense = void 0;
class Expense {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('Expense ID is required');
        }
        if (!props.transactionId || props.transactionId.trim() === '') {
            throw new Error('Transaction ID is required');
        }
        if (!props.storeId || props.storeId.trim() === '') {
            throw new Error('Store ID is required');
        }
        if (!props.categoryId || props.categoryId.trim() === '') {
            throw new Error('Category ID is required');
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
    get transactionId() {
        return this.props.transactionId;
    }
    get storeId() {
        return this.props.storeId;
    }
    get categoryId() {
        return this.props.categoryId;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get store() {
        return this.props.store;
    }
    get category() {
        return this.props.category;
    }
    get transaction() {
        return this.props.transaction;
    }
    toJSON() {
        return {
            id: this.props.id,
            transaction: this.props.transaction,
            transactionId: this.props.transactionId,
            category: this.props.category,
            storeId: this.props.storeId,
            store: this.props.store,
            categoryId: this.props.categoryId,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        };
    }
}
exports.Expense = Expense;
//# sourceMappingURL=expense.entity.js.map