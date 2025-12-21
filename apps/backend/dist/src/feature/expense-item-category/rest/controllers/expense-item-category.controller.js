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
exports.ExpenseItemCategoryController = void 0;
const common_1 = require("@nestjs/common");
const expense_item_category_service_1 = require("../../core/application/services/expense-item-category.service");
const create_expense_item_category_request_dto_1 = require("../dto/create-expense-item-category-request.dto");
const update_expense_item_category_request_dto_1 = require("../dto/update-expense-item-category-request.dto");
const expense_item_category_response_dto_1 = require("../dto/expense-item-category-response.dto");
const create_expense_item_category_dto_1 = require("../../core/application/dto/create-expense-item-category.dto");
const update_expense_item_category_dto_1 = require("../../core/application/dto/update-expense-item-category.dto");
const pagination_dto_1 = require("../../../transaction/core/application/dto/pagination.dto");
let ExpenseItemCategoryController = class ExpenseItemCategoryController {
    expenseItemCategoryService;
    constructor(expenseItemCategoryService) {
        this.expenseItemCategoryService = expenseItemCategoryService;
    }
    async create(createDto) {
        const coreDto = new create_expense_item_category_dto_1.CreateExpenseItemCategoryDto(createDto.name, createDto.parentId);
        const category = await this.expenseItemCategoryService.create(coreDto);
        return expense_item_category_response_dto_1.ExpenseItemCategoryResponseDto.fromEntity(category);
    }
    async findAll(parentId, page, limit) {
        const pagination = new pagination_dto_1.Pagination(page, limit);
        const result = await this.expenseItemCategoryService.findAll(parentId, pagination);
        return {
            data: expense_item_category_response_dto_1.ExpenseItemCategoryResponseDto.fromEntities(result.data),
            total: result.total,
            page: pagination.page,
            limit: pagination.limit,
        };
    }
    async getTree() {
        const tree = await this.expenseItemCategoryService.getTree();
        const transformTree = (node) => ({
            category: expense_item_category_response_dto_1.ExpenseItemCategoryResponseDto.fromEntity(node.category),
            children: node.children.map(transformTree),
        });
        return tree.map(transformTree);
    }
    async findOne(id) {
        const category = await this.expenseItemCategoryService.findById(id);
        return expense_item_category_response_dto_1.ExpenseItemCategoryResponseDto.fromEntity(category);
    }
    async update(id, updateDto) {
        const coreDto = new update_expense_item_category_dto_1.UpdateExpenseItemCategoryDto({
            name: updateDto.name,
            parentId: updateDto.parentId,
        });
        const category = await this.expenseItemCategoryService.update(id, coreDto);
        return expense_item_category_response_dto_1.ExpenseItemCategoryResponseDto.fromEntity(category);
    }
    async remove(id) {
        await this.expenseItemCategoryService.delete(id);
    }
};
exports.ExpenseItemCategoryController = ExpenseItemCategoryController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_expense_item_category_request_dto_1.CreateExpenseItemCategoryRequestDto]),
    __metadata("design:returntype", Promise)
], ExpenseItemCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('parentId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ExpenseItemCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('tree'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExpenseItemCategoryController.prototype, "getTree", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExpenseItemCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_expense_item_category_request_dto_1.UpdateExpenseItemCategoryRequestDto]),
    __metadata("design:returntype", Promise)
], ExpenseItemCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExpenseItemCategoryController.prototype, "remove", null);
exports.ExpenseItemCategoryController = ExpenseItemCategoryController = __decorate([
    (0, common_1.Controller)('expense-item-categories'),
    __metadata("design:paramtypes", [expense_item_category_service_1.ExpenseItemCategoryService])
], ExpenseItemCategoryController);
//# sourceMappingURL=expense-item-category.controller.js.map