"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCategoryCoreModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../../common/prisma/prisma.module");
const prisma_expense_category_repository_1 = require("./infrastructure/repositories/prisma-expense-category.repository");
const create_expense_category_use_case_1 = require("./application/use-cases/create-expense-category.use-case");
const get_expense_category_by_id_use_case_1 = require("./application/use-cases/get-expense-category-by-id.use-case");
const list_expense_categories_use_case_1 = require("./application/use-cases/list-expense-categories.use-case");
const get_category_tree_use_case_1 = require("./application/use-cases/get-category-tree.use-case");
const update_expense_category_use_case_1 = require("./application/use-cases/update-expense-category.use-case");
const delete_expense_category_use_case_1 = require("./application/use-cases/delete-expense-category.use-case");
const expense_category_service_1 = require("./application/services/expense-category.service");
let ExpenseCategoryCoreModule = class ExpenseCategoryCoreModule {
};
exports.ExpenseCategoryCoreModule = ExpenseCategoryCoreModule;
exports.ExpenseCategoryCoreModule = ExpenseCategoryCoreModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [
            {
                provide: 'ExpenseCategoryRepository',
                useClass: prisma_expense_category_repository_1.PrismaExpenseCategoryRepository,
            },
            create_expense_category_use_case_1.CreateExpenseCategoryUseCase,
            get_expense_category_by_id_use_case_1.GetExpenseCategoryByIdUseCase,
            list_expense_categories_use_case_1.ListExpenseCategoriesUseCase,
            get_category_tree_use_case_1.GetCategoryTreeUseCase,
            update_expense_category_use_case_1.UpdateExpenseCategoryUseCase,
            delete_expense_category_use_case_1.DeleteExpenseCategoryUseCase,
            expense_category_service_1.ExpenseCategoryService,
        ],
        exports: [expense_category_service_1.ExpenseCategoryService, 'ExpenseCategoryRepository'],
    })
], ExpenseCategoryCoreModule);
//# sourceMappingURL=expense-category-core.module.js.map