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
exports.NotificationDeliveryService = void 0;
const common_1 = require("@nestjs/common");
const notification_gateway_1 = require("../../../websocket/notification.gateway");
const expo_push_notification_service_1 = require("../../infrastructure/services/expo-push-notification.service");
const notification_preference_service_1 = require("./notification-preference.service");
const notification_type_vo_1 = require("../../domain/value-objects/notification-type.vo");
let NotificationDeliveryService = class NotificationDeliveryService {
    notificationGateway;
    pushNotificationService;
    preferenceService;
    constructor(notificationGateway, pushNotificationService, preferenceService) {
        this.notificationGateway = notificationGateway;
        this.pushNotificationService = pushNotificationService;
        this.preferenceService = preferenceService;
    }
    async deliver(notification) {
        const preferences = await this.preferenceService.getOrCreateDefaults(notification.userId);
        let deliveryMethods = notification.deliveryMethods;
        if (this.preferenceService.isInQuietHours(preferences)) {
            deliveryMethods = notification.deliveryMethods.filter((method) => method === notification_type_vo_1.DeliveryMethod.IN_APP);
            if (deliveryMethods.length === 0) {
                console.log(`Notification ${notification.id} skipped due to quiet hours`);
                return;
            }
        }
        const allowedMethods = this.preferenceService.getAllowedDeliveryMethods(preferences, notification.type);
        for (const method of deliveryMethods) {
            if (!allowedMethods.includes(method))
                continue;
            switch (method) {
                case notification_type_vo_1.DeliveryMethod.PUSH:
                    await this.deliverPush(notification);
                    break;
                case notification_type_vo_1.DeliveryMethod.IN_APP:
                    await this.deliverInApp(notification);
                    break;
                case notification_type_vo_1.DeliveryMethod.TOAST:
                    await this.deliverToast(notification);
                    break;
            }
        }
    }
    async deliverPush(notification) {
        try {
            await this.pushNotificationService.sendToUser(notification.userId, {
                title: notification.title,
                message: notification.message,
                data: {
                    notificationId: notification.id,
                    type: notification.type,
                    actionUrl: notification.actionUrl,
                    ...notification.data,
                },
            });
        }
        catch (error) {
            console.error('Error delivering push notification:', error);
        }
    }
    async deliverInApp(notification) {
        this.notificationGateway.emitToUser(notification.userId, 'notification:new', notification.toJSON());
    }
    async deliverToast(notification) {
        this.notificationGateway.emitToUser(notification.userId, 'notification:toast', {
            title: notification.title,
            message: notification.message,
            priority: notification.priority,
        });
    }
};
exports.NotificationDeliveryService = NotificationDeliveryService;
exports.NotificationDeliveryService = NotificationDeliveryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => notification_gateway_1.NotificationGateway))),
    __metadata("design:paramtypes", [notification_gateway_1.NotificationGateway,
        expo_push_notification_service_1.ExpoPushNotificationService,
        notification_preference_service_1.NotificationPreferenceService])
], NotificationDeliveryService);
//# sourceMappingURL=notification-delivery.service.js.map