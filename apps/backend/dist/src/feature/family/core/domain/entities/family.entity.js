"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Family = void 0;
class Family {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('Family ID is required');
        }
        if (!props.name || props.name.trim() === '') {
            throw new Error('Family name is required');
        }
        if (props.name.length > 100) {
            throw new Error('Family name must be 100 characters or less');
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
    get name() {
        return this.props.name;
    }
    get balance() {
        return this.props.balance;
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
            name: this.props.name,
            balance: this.props.balance,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        };
    }
}
exports.Family = Family;
//# sourceMappingURL=family.entity.js.map