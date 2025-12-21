"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseItemCategoryCoreModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../../common/prisma/prisma.module");
const prisma_expense_item_category_repository_1 = require("./infrastructure/repositories/prisma-expense-item-category.repository");
const create_expense_item_category_use_case_1 = require("./application/use-cases/create-expense-item-category.use-case");
const get_expense_item_category_by_id_use_case_1 = require("./application/use-cases/get-expense-item-category-by-id.use-case");
const list_expense_item_categories_use_case_1 = require("./application/use-cases/list-expense-item-categories.use-case");
const get_item_category_tree_use_case_1 = require("./application/use-cases/get-item-category-tree.use-case");
const update_expense_item_category_use_case_1 = require("./application/use-cases/update-expense-item-category.use-case");
const delete_expense_item_category_use_case_1 = require("./application/use-cases/delete-expense-item-category.use-case");
const expense_item_category_service_1 = require("./application/services/expense-item-category.service");
let ExpenseItemCategoryCoreModule = class ExpenseItemCategoryCoreModule {
};
exports.ExpenseItemCategoryCoreModule = ExpenseItemCategoryCoreModule;
exports.ExpenseItemCategoryCoreModule = ExpenseItemCategoryCoreModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [
            {
                provide: 'ExpenseItemCategoryRepository',
                useClass: prisma_expense_item_category_repository_1.PrismaExpenseItemCategoryRepository,
            },
            create_expense_item_category_use_case_1.CreateExpenseItemCategoryUseCase,
            get_expense_item_category_by_id_use_case_1.GetExpenseItemCategoryByIdUseCase,
            list_expense_item_categories_use_case_1.ListExpenseItemCategoriesUseCase,
            get_item_category_tree_use_case_1.GetItemCategoryTreeUseCase,
            update_expense_item_category_use_case_1.UpdateExpenseItemCategoryUseCase,
            delete_expense_item_category_use_case_1.DeleteExpenseItemCategoryUseCase,
            expense_item_category_service_1.ExpenseItemCategoryService,
        ],
        exports: [expense_item_category_service_1.ExpenseItemCategoryService, 'ExpenseItemCategoryRepository'],
    })
], ExpenseItemCategoryCoreModule);
//# sourceMappingURL=expense-item-category-core.module.js.map