"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCoreModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../../common/prisma/prisma.module");
const store_item_category_core_module_1 = require("../../store-item-category/core/store-item-category-core.module");
const prisma_item_repository_1 = require("./infrastructure/repositories/prisma-item.repository");
const create_item_use_case_1 = require("./application/use-cases/create-item.use-case");
const get_item_by_id_use_case_1 = require("./application/use-cases/get-item-by-id.use-case");
const list_items_use_case_1 = require("./application/use-cases/list-items.use-case");
const find_item_by_name_use_case_1 = require("./application/use-cases/find-item-by-name.use-case");
const update_item_use_case_1 = require("./application/use-cases/update-item.use-case");
const delete_item_use_case_1 = require("./application/use-cases/delete-item.use-case");
const item_service_1 = require("./application/services/item.service");
let ItemCoreModule = class ItemCoreModule {
};
exports.ItemCoreModule = ItemCoreModule;
exports.ItemCoreModule = ItemCoreModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, store_item_category_core_module_1.StoreItemCategoryCoreModule],
        providers: [
            {
                provide: 'ItemRepository',
                useClass: prisma_item_repository_1.PrismaItemRepository,
            },
            create_item_use_case_1.CreateItemUseCase,
            get_item_by_id_use_case_1.GetItemByIdUseCase,
            list_items_use_case_1.ListItemsUseCase,
            find_item_by_name_use_case_1.FindItemByNameUseCase,
            update_item_use_case_1.UpdateItemUseCase,
            delete_item_use_case_1.DeleteItemUseCase,
            item_service_1.ItemService,
        ],
        exports: [item_service_1.ItemService, 'ItemRepository'],
    })
], ItemCoreModule);
//# sourceMappingURL=item-core.module.js.map