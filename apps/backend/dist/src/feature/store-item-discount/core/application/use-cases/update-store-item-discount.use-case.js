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
exports.UpdateStoreItemDiscountUseCase = void 0;
const common_1 = require("@nestjs/common");
const prismaNamespace_1 = require("../../../../../../prisma/generated/prisma/internal/prismaNamespace");
let UpdateStoreItemDiscountUseCase = class UpdateStoreItemDiscountUseCase {
    discountRepository;
    constructor(discountRepository) {
        this.discountRepository = discountRepository;
    }
    async execute(id, dto) {
        const existingDiscount = await this.discountRepository.findById(id);
        if (!existingDiscount) {
            throw new common_1.NotFoundException(`Discount with ID ${id} not found`);
        }
        await this.validate(existingDiscount, dto);
        const discount = await this.discountRepository.update(id, {
            discount: dto.discount ? new prismaNamespace_1.Decimal(dto.discount) : undefined,
            endedAt: dto.endedAt,
        });
        return discount;
    }
    async validate(existingDiscount, dto) {
        if (existingDiscount.endedAt && existingDiscount.endedAt < new Date()) {
            throw new common_1.BadRequestException('Cannot update an already ended discount');
        }
        if (dto.discount !== undefined && dto.discount <= 0) {
            throw new common_1.BadRequestException('Discount must be greater than 0');
        }
        if (dto.endedAt && dto.endedAt < existingDiscount.startedAt) {
            throw new common_1.BadRequestException('End date must be after start date');
        }
    }
};
exports.UpdateStoreItemDiscountUseCase = UpdateStoreItemDiscountUseCase;
exports.UpdateStoreItemDiscountUseCase = UpdateStoreItemDiscountUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('StoreItemDiscountRepository')),
    __metadata("design:paramtypes", [Object])
], UpdateStoreItemDiscountUseCase);
//# sourceMappingURL=update-store-item-discount.use-case.js.map