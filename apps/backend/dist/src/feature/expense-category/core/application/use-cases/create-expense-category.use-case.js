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
exports.CreateExpenseCategoryUseCase = void 0;
const common_1 = require("@nestjs/common");
let CreateExpenseCategoryUseCase = class CreateExpenseCategoryUseCase {
    expenseCategoryRepository;
    constructor(expenseCategoryRepository) {
        this.expenseCategoryRepository = expenseCategoryRepository;
    }
    async execute(dto) {
        await this.validate(dto);
        const category = await this.expenseCategoryRepository.create({
            name: dto.name,
            parentId: dto.parentId ?? null,
            isConnectedToStore: dto.isConnectedToStore,
        });
        return category;
    }
    async validate(dto) {
        const existingCategory = await this.expenseCategoryRepository.findByName(dto.name);
        if (existingCategory) {
            throw new common_1.BadRequestException('Category name must be unique');
        }
        if (!dto.parentId) {
            return;
        }
        const parent = await this.expenseCategoryRepository.findById(dto.parentId);
        if (!parent) {
            throw new common_1.BadRequestException('Parent category not found');
        }
    }
};
exports.CreateExpenseCategoryUseCase = CreateExpenseCategoryUseCase;
exports.CreateExpenseCategoryUseCase = CreateExpenseCategoryUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ExpenseCategoryRepository')),
    __metadata("design:paramtypes", [Object])
], CreateExpenseCategoryUseCase);
//# sourceMappingURL=create-expense-category.use-case.js.map