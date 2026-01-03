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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteItemUseCase = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../../common/prisma/prisma.service");
let DeleteItemUseCase = class DeleteItemUseCase {
    itemRepository;
    prisma;
    constructor(itemRepository, prisma) {
        this.itemRepository = itemRepository;
        this.prisma = prisma;
    }
    async execute(id) {
        const item = await this.itemRepository.findById(id);
        if (!item) {
            throw new common_1.NotFoundException(`Item with ID ${id} not found`);
        }
        const storeItemCount = await this.prisma.storeItem.count({
            where: { itemId: id },
        });
        if (storeItemCount > 0) {
            throw new common_1.BadRequestException(`Cannot delete item. It is referenced by ${storeItemCount} store item(s)`);
        }
        await this.itemRepository.delete(id);
    }
};
exports.DeleteItemUseCase = DeleteItemUseCase;
exports.DeleteItemUseCase = DeleteItemUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ItemRepository')),
    __metadata("design:paramtypes", [Object, prisma_service_1.PrismaService])
], DeleteItemUseCase);
//# sourceMappingURL=delete-item.use-case.js.map