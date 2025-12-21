"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCoreModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../../common/prisma/prisma.module");
const prisma_store_repository_1 = require("./infrastructure/repositories/prisma-store.repository");
const prisma_store_item_repository_1 = require("./infrastructure/repositories/prisma-store-item.repository");
const create_or_find_store_use_case_1 = require("./application/use-cases/create-or-find-store.use-case");
const get_store_by_id_use_case_1 = require("./application/use-cases/get-store-by-id.use-case");
const list_stores_use_case_1 = require("./application/use-cases/list-stores.use-case");
const create_or_find_store_item_use_case_1 = require("./application/use-cases/create-or-find-store-item.use-case");
const get_store_item_by_id_use_case_1 = require("./application/use-cases/get-store-item-by-id.use-case");
const list_store_items_use_case_1 = require("./application/use-cases/list-store-items.use-case");
const store_service_1 = require("./application/services/store.service");
const store_item_service_1 = require("./application/services/store-item.service");
let StoreCoreModule = class StoreCoreModule {
};
exports.StoreCoreModule = StoreCoreModule;
exports.StoreCoreModule = StoreCoreModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [
            {
                provide: 'StoreRepository',
                useClass: prisma_store_repository_1.PrismaStoreRepository,
            },
            {
                provide: 'StoreItemRepository',
                useClass: prisma_store_item_repository_1.PrismaStoreItemRepository,
            },
            create_or_find_store_use_case_1.CreateOrFindStoreUseCase,
            get_store_by_id_use_case_1.GetStoreByIdUseCase,
            list_stores_use_case_1.ListStoresUseCase,
            create_or_find_store_item_use_case_1.CreateOrFindStoreItemUseCase,
            get_store_item_by_id_use_case_1.GetStoreItemByIdUseCase,
            list_store_items_use_case_1.ListStoreItemsUseCase,
            store_service_1.StoreService,
            store_item_service_1.StoreItemService,
        ],
        exports: [store_service_1.StoreService, store_item_service_1.StoreItemService],
    })
], StoreCoreModule);
//# sourceMappingURL=store-core.module.js.map