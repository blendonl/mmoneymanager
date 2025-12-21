"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTypeVO = exports.TransactionType = void 0;
var TransactionType;
(function (TransactionType) {
    TransactionType["EXPENSE"] = "EXPENSE";
    TransactionType["INCOME"] = "INCOME";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
class TransactionTypeVO {
    value;
    constructor(value) {
        this.validate(value);
        this.value = value;
    }
    validate(value) {
        if (!Object.values(TransactionType).includes(value)) {
            throw new Error(`Invalid transaction type: ${value}`);
        }
    }
    getValue() {
        return this.value;
    }
    isExpense() {
        return this.value === TransactionType.EXPENSE;
    }
    isIncome() {
        return this.value === TransactionType.INCOME;
    }
    equals(other) {
        return this.value === other.value;
    }
}
exports.TransactionTypeVO = TransactionTypeVO;
//# sourceMappingURL=transaction-type.vo.js.map