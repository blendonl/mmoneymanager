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
exports.ExpenseCategoryController = void 0;
const common_1 = require("@nestjs/common");
const expense_category_service_1 = require("../../core/application/services/expense-category.service");
const create_expense_category_request_dto_1 = require("../dto/create-expense-category-request.dto");
const update_expense_category_request_dto_1 = require("../dto/update-expense-category-request.dto");
const expense_category_response_dto_1 = require("../dto/expense-category-response.dto");
const create_expense_category_dto_1 = require("../../core/application/dto/create-expense-category.dto");
const update_expense_category_dto_1 = require("../../core/application/dto/update-expense-category.dto");
const pagination_dto_1 = require("../../../transaction/core/application/dto/pagination.dto");
let ExpenseCategoryController = class ExpenseCategoryController {
    expenseCategoryService;
    constructor(expenseCategoryService) {
        this.expenseCategoryService = expenseCategoryService;
    }
    async create(createDto) {
        console.log(createDto);
        const coreDto = new create_expense_category_dto_1.CreateExpenseCategoryDto(createDto.name, createDto.isConnectedToStore, createDto.parentId);
        const category = await this.expenseCategoryService.create(coreDto);
        return expense_category_response_dto_1.ExpenseCategoryResponseDto.fromEntity(category);
    }
    async findAll(parentId, page, limit) {
        const pagination = new pagination_dto_1.Pagination(page, limit);
        const result = await this.expenseCategoryService.findAll(parentId, pagination);
        return {
            data: expense_category_response_dto_1.ExpenseCategoryResponseDto.fromEntities(result.data),
            total: result.total,
            page: pagination.page,
            limit: pagination.limit,
        };
    }
    async getTree() {
        const tree = await this.expenseCategoryService.getTree();
        const transformTree = (node) => ({
            category: expense_category_response_dto_1.ExpenseCategoryResponseDto.fromEntity(node.category),
            children: node.children.map(transformTree),
        });
        return tree.map(transformTree);
    }
    async findOne(id) {
        const category = await this.expenseCategoryService.findById(id);
        return expense_category_response_dto_1.ExpenseCategoryResponseDto.fromEntity(category);
    }
    async update(id, updateDto) {
        const coreDto = new update_expense_category_dto_1.UpdateExpenseCategoryDto({
            name: updateDto.name,
            parentId: updateDto.parentId,
        });
        const category = await this.expenseCategoryService.update(id, coreDto);
        return expense_category_response_dto_1.ExpenseCategoryResponseDto.fromEntity(category);
    }
    async remove(id) {
        await this.expenseCategoryService.delete(id);
    }
};
exports.ExpenseCategoryController = ExpenseCategoryController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_expense_category_request_dto_1.CreateExpenseCategoryRequestDto]),
    __metadata("design:returntype", Promise)
], ExpenseCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('parentId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ExpenseCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('tree'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExpenseCategoryController.prototype, "getTree", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExpenseCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_expense_category_request_dto_1.UpdateExpenseCategoryRequestDto]),
    __metadata("design:returntype", Promise)
], ExpenseCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExpenseCategoryController.prototype, "remove", null);
exports.ExpenseCategoryController = ExpenseCategoryController = __decorate([
    (0, common_1.Controller)('expense-categories'),
    __metadata("design:paramtypes", [expense_category_service_1.ExpenseCategoryService])
], ExpenseCategoryController);
//# sourceMappingURL=expense-category.controller.js.map