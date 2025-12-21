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
exports.ExpenseItemCategoryService = void 0;
const common_1 = require("@nestjs/common");
const create_expense_item_category_use_case_1 = require("../use-cases/create-expense-item-category.use-case");
const get_expense_item_category_by_id_use_case_1 = require("../use-cases/get-expense-item-category-by-id.use-case");
const list_expense_item_categories_use_case_1 = require("../use-cases/list-expense-item-categories.use-case");
const get_item_category_tree_use_case_1 = require("../use-cases/get-item-category-tree.use-case");
const update_expense_item_category_use_case_1 = require("../use-cases/update-expense-item-category.use-case");
const delete_expense_item_category_use_case_1 = require("../use-cases/delete-expense-item-category.use-case");
let ExpenseItemCategoryService = class ExpenseItemCategoryService {
    createExpenseItemCategoryUseCase;
    getExpenseItemCategoryByIdUseCase;
    listExpenseItemCategoriesUseCase;
    getItemCategoryTreeUseCase;
    updateExpenseItemCategoryUseCase;
    deleteExpenseItemCategoryUseCase;
    constructor(createExpenseItemCategoryUseCase, getExpenseItemCategoryByIdUseCase, listExpenseItemCategoriesUseCase, getItemCategoryTreeUseCase, updateExpenseItemCategoryUseCase, deleteExpenseItemCategoryUseCase) {
        this.createExpenseItemCategoryUseCase = createExpenseItemCategoryUseCase;
        this.getExpenseItemCategoryByIdUseCase = getExpenseItemCategoryByIdUseCase;
        this.listExpenseItemCategoriesUseCase = listExpenseItemCategoriesUseCase;
        this.getItemCategoryTreeUseCase = getItemCategoryTreeUseCase;
        this.updateExpenseItemCategoryUseCase = updateExpenseItemCategoryUseCase;
        this.deleteExpenseItemCategoryUseCase = deleteExpenseItemCategoryUseCase;
    }
    async create(dto) {
        return this.createExpenseItemCategoryUseCase.execute(dto);
    }
    async findById(id) {
        return this.getExpenseItemCategoryByIdUseCase.execute(id);
    }
    async findAll(parentId, pagination) {
        return this.listExpenseItemCategoriesUseCase.execute(parentId, pagination);
    }
    async getTree() {
        return this.getItemCategoryTreeUseCase.execute();
    }
    async update(id, dto) {
        return this.updateExpenseItemCategoryUseCase.execute(id, dto);
    }
    async delete(id) {
        return this.deleteExpenseItemCategoryUseCase.execute(id);
    }
};
exports.ExpenseItemCategoryService = ExpenseItemCategoryService;
exports.ExpenseItemCategoryService = ExpenseItemCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_expense_item_category_use_case_1.CreateExpenseItemCategoryUseCase,
        get_expense_item_category_by_id_use_case_1.GetExpenseItemCategoryByIdUseCase,
        list_expense_item_categories_use_case_1.ListExpenseItemCategoriesUseCase,
        get_item_category_tree_use_case_1.GetItemCategoryTreeUseCase,
        update_expense_item_category_use_case_1.UpdateExpenseItemCategoryUseCase,
        delete_expense_item_category_use_case_1.DeleteExpenseItemCategoryUseCase])
], ExpenseItemCategoryService);
//# sourceMappingURL=expense-item-category.service.js.map