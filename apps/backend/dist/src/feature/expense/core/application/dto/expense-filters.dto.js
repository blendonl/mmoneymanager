"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseFilters = void 0;
class ExpenseFilters {
    userId;
    categoryId;
    storeId;
    dateFrom;
    dateTo;
    valueMin;
    valueMax;
    constructor(data) {
        this.userId = data.userId;
        this.categoryId = data.categoryId;
        this.storeId = data.storeId;
        this.dateFrom = data.dateFrom;
        this.dateTo = data.dateTo;
        this.valueMin = data.valueMin;
        this.valueMax = data.valueMax;
    }
}
exports.ExpenseFilters = ExpenseFilters;
//# sourceMappingURL=expense-filters.dto.js.map