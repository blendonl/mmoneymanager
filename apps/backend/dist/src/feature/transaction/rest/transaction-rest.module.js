"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRestModule = void 0;
const common_1 = require("@nestjs/common");
const transaction_core_module_1 = require("../core/transaction-core.module");
const transaction_controller_1 = require("./controllers/transaction.controller");
let TransactionRestModule = class TransactionRestModule {
};
exports.TransactionRestModule = TransactionRestModule;
exports.TransactionRestModule = TransactionRestModule = __decorate([
    (0, common_1.Module)({
        imports: [transaction_core_module_1.TransactionCoreModule],
        controllers: [transaction_controller_1.TransactionController],
    })
], TransactionRestModule);
//# sourceMappingURL=transaction-rest.module.js.map