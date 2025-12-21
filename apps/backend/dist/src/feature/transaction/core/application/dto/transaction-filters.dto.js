"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionFilters = void 0;
class TransactionFilters {
    userId;
    type;
    dateFrom;
    dateTo;
    valueMin;
    valueMax;
    constructor(data) {
        this.userId = data?.userId;
        this.type = data?.type;
        this.dateFrom = data?.dateFrom;
        this.dateTo = data?.dateTo;
        this.valueMin = data?.valueMin;
        this.valueMax = data?.valueMax;
    }
}
exports.TransactionFilters = TransactionFilters;
//# sourceMappingURL=transaction-filters.dto.js.map