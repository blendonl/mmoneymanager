"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCategory = void 0;
class ExpenseCategory {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('Expense category ID is required');
        }
        if (!props.name || props.name.trim() === '') {
            throw new Error('Expense category name is required');
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
    get parentId() {
        return this.props.parentId;
    }
    get name() {
        return this.props.name;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get isConnectedToStore() {
        return this.props.isConnectedToStore;
    }
    isRoot() {
        return this.props.parentId === null;
    }
    isChildOf(parentId) {
        return this.props.parentId === parentId;
    }
    toJSON() {
        return {
            id: this.props.id,
            parentId: this.props.parentId,
            name: this.props.name,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        };
    }
}
exports.ExpenseCategory = ExpenseCategory;
//# sourceMappingURL=expense-category.entity.js.map