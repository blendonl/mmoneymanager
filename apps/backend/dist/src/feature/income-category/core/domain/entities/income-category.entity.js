"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeCategory = void 0;
class IncomeCategory {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('Income category ID is required');
        }
        if (!props.name || props.name.trim() === '') {
            throw new Error('Category name is required');
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
exports.IncomeCategory = IncomeCategory;
//# sourceMappingURL=income-category.entity.js.map