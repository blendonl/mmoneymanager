"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRestModule = void 0;
const common_1 = require("@nestjs/common");
const item_core_module_1 = require("../core/item-core.module");
const item_controller_1 = require("./controllers/item.controller");
let ItemRestModule = class ItemRestModule {
};
exports.ItemRestModule = ItemRestModule;
exports.ItemRestModule = ItemRestModule = __decorate([
    (0, common_1.Module)({
        imports: [item_core_module_1.ItemCoreModule],
        controllers: [item_controller_1.ItemController],
    })
], ItemRestModule);
//# sourceMappingURL=item-rest.module.js.map