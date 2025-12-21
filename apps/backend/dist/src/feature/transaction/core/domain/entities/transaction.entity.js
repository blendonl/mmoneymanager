"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const transaction_type_vo_1 = require("../value-objects/transaction-type.vo");
class Transaction {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('Transaction ID is required');
        }
        if (!props.userId || props.userId.trim() === '') {
            throw new Error('User ID is required');
        }
        if (!props.type) {
            throw new Error('Transaction type is required');
        }
        if (!props.value || props.value.toNumber() <= 0) {
            throw new Error('Transaction value must be positive');
        }
    }
    get id() {
        return this.props.id;
    }
    get userId() {
        return this.props.userId;
    }
    get type() {
        return this.props.type;
    }
    get value() {
        return this.props.value;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    isExpense() {
        return this.props.type === transaction_type_vo_1.TransactionType.EXPENSE;
    }
    isIncome() {
        return this.props.type === transaction_type_vo_1.TransactionType.INCOME;
    }
    toJSON() {
        return {
            id: this.id,
            userId: this.userId,
            type: this.type,
            value: this.value.toNumber(),
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.entity.js.map