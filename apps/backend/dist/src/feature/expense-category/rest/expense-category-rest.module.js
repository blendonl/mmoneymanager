"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCategoryRestModule = void 0;
const common_1 = require("@nestjs/common");
const expense_category_core_module_1 = require("../core/expense-category-core.module");
const expense_category_controller_1 = require("./controllers/expense-category.controller");
let ExpenseCategoryRestModule = class ExpenseCategoryRestModule {
};
exports.ExpenseCategoryRestModule = ExpenseCategoryRestModule;
exports.ExpenseCategoryRestModule = ExpenseCategoryRestModule = __decorate([
    (0, common_1.Module)({
        imports: [expense_category_core_module_1.ExpenseCategoryCoreModule],
        controllers: [expense_category_controller_1.ExpenseCategoryController],
    })
], ExpenseCategoryRestModule);
//# sourceMappingURL=expense-category-rest.module.js.map