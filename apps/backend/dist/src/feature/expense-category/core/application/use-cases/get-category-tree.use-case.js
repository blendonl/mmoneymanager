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
exports.GetCategoryTreeUseCase = void 0;
const common_1 = require("@nestjs/common");
let GetCategoryTreeUseCase = class GetCategoryTreeUseCase {
    expenseCategoryRepository;
    constructor(expenseCategoryRepository) {
        this.expenseCategoryRepository = expenseCategoryRepository;
    }
    async execute() {
        const rootCategories = await this.expenseCategoryRepository.findByParentId(null);
        const trees = await Promise.all(rootCategories.data.map((category) => this.buildTree(category)));
        return trees;
    }
    async buildTree(category) {
        const children = await this.expenseCategoryRepository.findChildren(category.id);
        const childTrees = await Promise.all(children.map((child) => this.buildTree(child)));
        return {
            category,
            children: childTrees,
        };
    }
};
exports.GetCategoryTreeUseCase = GetCategoryTreeUseCase;
exports.GetCategoryTreeUseCase = GetCategoryTreeUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ExpenseCategoryRepository')),
    __metadata("design:paramtypes", [Object])
], GetCategoryTreeUseCase);
//# sourceMappingURL=get-category-tree.use-case.js.map