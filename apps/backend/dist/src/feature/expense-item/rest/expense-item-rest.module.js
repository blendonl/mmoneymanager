"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseItemRestModule = void 0;
const common_1 = require("@nestjs/common");
const expense_item_core_module_1 = require("../core/expense-item-core.module");
const expense_item_controller_1 = require("./controllers/expense-item.controller");
let ExpenseItemRestModule = class ExpenseItemRestModule {
};
exports.ExpenseItemRestModule = ExpenseItemRestModule;
exports.ExpenseItemRestModule = ExpenseItemRestModule = __decorate([
    (0, common_1.Module)({
        imports: [expense_item_core_module_1.ExpenseItemCoreModule],
        controllers: [expense_item_controller_1.ExpenseItemController],
    })
], ExpenseItemRestModule);
//# sourceMappingURL=expense-item-rest.module.js.map