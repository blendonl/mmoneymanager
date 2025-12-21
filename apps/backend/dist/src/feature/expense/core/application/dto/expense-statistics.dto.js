"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseStatistics = void 0;
class ExpenseStatistics {
    totalExpenses;
    expenseCount;
    averageExpense;
    expensesByCategory;
    expensesByStore;
    constructor(totalExpenses, expenseCount, averageExpense, expensesByCategory, expensesByStore) {
        this.totalExpenses = totalExpenses;
        this.expenseCount = expenseCount;
        this.averageExpense = averageExpense;
        this.expensesByCategory = expensesByCategory;
        this.expensesByStore = expensesByStore;
    }
}
exports.ExpenseStatistics = ExpenseStatistics;
//# sourceMappingURL=expense-statistics.dto.js.map