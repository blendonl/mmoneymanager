"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreItemDiscountCoreModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../../common/prisma/prisma.module");
const store_core_module_1 = require("../../store/core/store-core.module");
const prisma_store_item_discount_repository_1 = require("./infrastructure/repositories/prisma-store-item-discount.repository");
const create_store_item_discount_use_case_1 = require("./application/use-cases/create-store-item-discount.use-case");
const get_store_item_discount_by_id_use_case_1 = require("./application/use-cases/get-store-item-discount-by-id.use-case");
const list_store_item_discounts_use_case_1 = require("./application/use-cases/list-store-item-discounts.use-case");
const get_active_discount_use_case_1 = require("./application/use-cases/get-active-discount.use-case");
const update_store_item_discount_use_case_1 = require("./application/use-cases/update-store-item-discount.use-case");
const end_discount_use_case_1 = require("./application/use-cases/end-discount.use-case");
const delete_store_item_discount_use_case_1 = require("./application/use-cases/delete-store-item-discount.use-case");
const store_item_discount_service_1 = require("./application/services/store-item-discount.service");
let StoreItemDiscountCoreModule = class StoreItemDiscountCoreModule {
};
exports.StoreItemDiscountCoreModule = StoreItemDiscountCoreModule;
exports.StoreItemDiscountCoreModule = StoreItemDiscountCoreModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, store_core_module_1.StoreCoreModule],
        providers: [
            {
                provide: 'StoreItemDiscountRepository',
                useClass: prisma_store_item_discount_repository_1.PrismaStoreItemDiscountRepository,
            },
            create_store_item_discount_use_case_1.CreateStoreItemDiscountUseCase,
            get_store_item_discount_by_id_use_case_1.GetStoreItemDiscountByIdUseCase,
            list_store_item_discounts_use_case_1.ListStoreItemDiscountsUseCase,
            get_active_discount_use_case_1.GetActiveDiscountUseCase,
            update_store_item_discount_use_case_1.UpdateStoreItemDiscountUseCase,
            end_discount_use_case_1.EndDiscountUseCase,
            delete_store_item_discount_use_case_1.DeleteStoreItemDiscountUseCase,
            store_item_discount_service_1.StoreItemDiscountService,
        ],
        exports: [store_item_discount_service_1.StoreItemDiscountService, 'StoreItemDiscountRepository'],
    })
], StoreItemDiscountCoreModule);
//# sourceMappingURL=store-item-discount-core.module.js.map