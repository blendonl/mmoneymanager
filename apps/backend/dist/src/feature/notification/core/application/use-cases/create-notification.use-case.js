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
exports.CreateNotificationUseCase = void 0;
const common_1 = require("@nestjs/common");
const notification_template_service_1 = require("../services/notification-template.service");
const notification_delivery_service_1 = require("../services/notification-delivery.service");
const notification_type_vo_1 = require("../../domain/value-objects/notification-type.vo");
const uuid_1 = require("uuid");
let CreateNotificationUseCase = class CreateNotificationUseCase {
    notificationRepository;
    templateService;
    deliveryService;
    constructor(notificationRepository, templateService, deliveryService) {
        this.notificationRepository = notificationRepository;
        this.templateService = templateService;
        this.deliveryService = deliveryService;
    }
    async execute(dto) {
        const template = this.templateService.generateTemplate(dto.type, dto.data || {});
        const notification = await this.notificationRepository.create({
            id: (0, uuid_1.v4)(),
            userId: dto.userId,
            type: dto.type,
            priority: dto.priority || notification_type_vo_1.NotificationPriority.MEDIUM,
            title: template.title,
            message: template.message,
            data: dto.data,
            deliveryMethods: dto.deliveryMethods,
            isRead: false,
            isInteracted: false,
            actionUrl: template.actionUrl,
            familyId: dto.familyId,
            transactionId: dto.transactionId,
            invitationId: dto.invitationId,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        await this.deliveryService.deliver(notification);
        return notification;
    }
};
exports.CreateNotificationUseCase = CreateNotificationUseCase;
exports.CreateNotificationUseCase = CreateNotificationUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('NotificationRepository')),
    __metadata("design:paramtypes", [Object, notification_template_service_1.NotificationTemplateService,
        notification_delivery_service_1.NotificationDeliveryService])
], CreateNotificationUseCase);
//# sourceMappingURL=create-notification.use-case.js.map