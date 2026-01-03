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
exports.GetStoreItemDiscountByIdUseCase = void 0;
const common_1 = require("@nestjs/common");
let GetStoreItemDiscountByIdUseCase = class GetStoreItemDiscountByIdUseCase {
    discountRepository;
    constructor(discountRepository) {
        this.discountRepository = discountRepository;
    }
    async execute(id) {
        const discount = await this.discountRepository.findById(id);
        if (!discount) {
            throw new common_1.NotFoundException(`Discount with ID ${id} not found`);
        }
        return discount;
    }
};
exports.GetStoreItemDiscountByIdUseCase = GetStoreItemDiscountByIdUseCase;
exports.GetStoreItemDiscountByIdUseCase = GetStoreItemDiscountByIdUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('StoreItemDiscountRepository')),
    __metadata("design:paramtypes", [Object])
], GetStoreItemDiscountByIdUseCase);
//# sourceMappingURL=get-store-item-discount-by-id.use-case.js.map