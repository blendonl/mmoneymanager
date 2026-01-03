"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionFilters = void 0;
class TransactionFilters {
    userId;
    type;
    familyId;
    scope;
    dateFrom;
    dateTo;
    valueMin;
    valueMax;
    constructor(data) {
        this.userId = data?.userId;
        this.type = data?.type;
        this.familyId = data?.familyId;
        this.scope = data?.scope;
        this.dateFrom = data?.dateFrom;
        this.dateTo = data?.dateTo;
        this.valueMin = data?.valueMin;
        this.valueMax = data?.valueMax;
    }
}
exports.TransactionFilters = TransactionFilters;
//# sourceMappingURL=transaction-filters.dto.js.map