"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseItemService = void 0;
const common_1 = require("@nestjs/common");
const create_expense_item_use_case_1 = require("../use-cases/create-expense-item.use-case");
const get_expense_item_by_id_use_case_1 = require("../use-cases/get-expense-item-by-id.use-case");
const list_expense_items_use_case_1 = require("../use-cases/list-expense-items.use-case");
const update_expense_item_use_case_1 = require("../use-cases/update-expense-item.use-case");
const delete_expense_item_use_case_1 = require("../use-cases/delete-expense-item.use-case");
const calculate_expense_total_use_case_1 = require("../use-cases/calculate-expense-total.use-case");
let ExpenseItemService = class ExpenseItemService {
    createExpenseItemUseCase;
    getExpenseItemByIdUseCase;
    listExpenseItemsUseCase;
    updateExpenseItemUseCase;
    deleteExpenseItemUseCase;
    calculateExpenseTotalUseCase;
    constructor(createExpenseItemUseCase, getExpenseItemByIdUseCase, listExpenseItemsUseCase, updateExpenseItemUseCase, deleteExpenseItemUseCase, calculateExpenseTotalUseCase) {
        this.createExpenseItemUseCase = createExpenseItemUseCase;
        this.getExpenseItemByIdUseCase = getExpenseItemByIdUseCase;
        this.listExpenseItemsUseCase = listExpenseItemsUseCase;
        this.updateExpenseItemUseCase = updateExpenseItemUseCase;
        this.deleteExpenseItemUseCase = deleteExpenseItemUseCase;
        this.calculateExpenseTotalUseCase = calculateExpenseTotalUseCase;
    }
    async create(dto, storeId) {
        return this.createExpenseItemUseCase.execute(dto, storeId);
    }
    async findById(id) {
        return this.getExpenseItemByIdUseCase.execute(id);
    }
    async findAll(expenseId, pagination) {
        return this.listExpenseItemsUseCase.execute(expenseId, pagination);
    }
    async update(id, dto) {
        return this.updateExpenseItemUseCase.execute(id, dto);
    }
    async delete(id) {
        return this.deleteExpenseItemUseCase.execute(id);
    }
    async calculateTotal(expenseId) {
        return this.calculateExpenseTotalUseCase.execute(expenseId);
    }
};
exports.ExpenseItemService = ExpenseItemService;
exports.ExpenseItemService = ExpenseItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_expense_item_use_case_1.CreateExpenseItemUseCase,
        get_expense_item_by_id_use_case_1.GetExpenseItemByIdUseCase,
        list_expense_items_use_case_1.ListExpenseItemsUseCase,
        update_expense_item_use_case_1.UpdateExpenseItemUseCase,
        delete_expense_item_use_case_1.DeleteExpenseItemUseCase,
        calculate_expense_total_use_case_1.CalculateExpenseTotalUseCase])
], ExpenseItemService);
//# sourceMappingURL=expense-item.service.js.map