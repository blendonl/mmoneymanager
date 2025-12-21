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
exports.ExpenseCategoryService = void 0;
const common_1 = require("@nestjs/common");
const create_expense_category_use_case_1 = require("../use-cases/create-expense-category.use-case");
const get_expense_category_by_id_use_case_1 = require("../use-cases/get-expense-category-by-id.use-case");
const list_expense_categories_use_case_1 = require("../use-cases/list-expense-categories.use-case");
const get_category_tree_use_case_1 = require("../use-cases/get-category-tree.use-case");
const update_expense_category_use_case_1 = require("../use-cases/update-expense-category.use-case");
const delete_expense_category_use_case_1 = require("../use-cases/delete-expense-category.use-case");
let ExpenseCategoryService = class ExpenseCategoryService {
    createExpenseCategoryUseCase;
    getExpenseCategoryByIdUseCase;
    listExpenseCategoriesUseCase;
    getCategoryTreeUseCase;
    updateExpenseCategoryUseCase;
    deleteExpenseCategoryUseCase;
    constructor(createExpenseCategoryUseCase, getExpenseCategoryByIdUseCase, listExpenseCategoriesUseCase, getCategoryTreeUseCase, updateExpenseCategoryUseCase, deleteExpenseCategoryUseCase) {
        this.createExpenseCategoryUseCase = createExpenseCategoryUseCase;
        this.getExpenseCategoryByIdUseCase = getExpenseCategoryByIdUseCase;
        this.listExpenseCategoriesUseCase = listExpenseCategoriesUseCase;
        this.getCategoryTreeUseCase = getCategoryTreeUseCase;
        this.updateExpenseCategoryUseCase = updateExpenseCategoryUseCase;
        this.deleteExpenseCategoryUseCase = deleteExpenseCategoryUseCase;
    }
    async create(dto) {
        return this.createExpenseCategoryUseCase.execute(dto);
    }
    async findById(id) {
        return this.getExpenseCategoryByIdUseCase.execute(id);
    }
    async findAll(parentId, pagination) {
        return this.listExpenseCategoriesUseCase.execute(parentId, pagination);
    }
    async getTree() {
        return this.getCategoryTreeUseCase.execute();
    }
    async update(id, dto) {
        return this.updateExpenseCategoryUseCase.execute(id, dto);
    }
    async delete(id) {
        return this.deleteExpenseCategoryUseCase.execute(id);
    }
};
exports.ExpenseCategoryService = ExpenseCategoryService;
exports.ExpenseCategoryService = ExpenseCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_expense_category_use_case_1.CreateExpenseCategoryUseCase,
        get_expense_category_by_id_use_case_1.GetExpenseCategoryByIdUseCase,
        list_expense_categories_use_case_1.ListExpenseCategoriesUseCase,
        get_category_tree_use_case_1.GetCategoryTreeUseCase,
        update_expense_category_use_case_1.UpdateExpenseCategoryUseCase,
        delete_expense_category_use_case_1.DeleteExpenseCategoryUseCase])
], ExpenseCategoryService);
//# sourceMappingURL=expense-category.service.js.map