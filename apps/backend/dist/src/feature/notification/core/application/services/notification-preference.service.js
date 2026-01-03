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
exports.NotificationPreferenceService = void 0;
const common_1 = require("@nestjs/common");
const notification_type_vo_1 = require("../../domain/value-objects/notification-type.vo");
let NotificationPreferenceService = class NotificationPreferenceService {
    preferenceRepository;
    constructor(preferenceRepository) {
        this.preferenceRepository = preferenceRepository;
    }
    async getOrCreateDefaults(userId) {
        return await this.preferenceRepository.getOrCreateDefaults(userId);
    }
    isInQuietHours(preference) {
        if (!preference.quietHoursEnabled) {
            return false;
        }
        if (!preference.quietHoursStart || !preference.quietHoursEnd) {
            return false;
        }
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        const startTime = preference.quietHoursStart.getHours() * 60 +
            preference.quietHoursStart.getMinutes();
        const endTime = preference.quietHoursEnd.getHours() * 60 +
            preference.quietHoursEnd.getMinutes();
        if (startTime <= endTime) {
            return currentTime >= startTime && currentTime <= endTime;
        }
        else {
            return currentTime >= startTime || currentTime <= endTime;
        }
    }
    getAllowedDeliveryMethods(preference, type) {
        const allowed = [];
        if (preference.enablePushNotifications) {
            allowed.push(notification_type_vo_1.DeliveryMethod.PUSH);
        }
        if (preference.enableInAppNotifications) {
            allowed.push(notification_type_vo_1.DeliveryMethod.IN_APP);
        }
        if (preference.enableToastNotifications) {
            allowed.push(notification_type_vo_1.DeliveryMethod.TOAST);
        }
        const typePrefs = preference.typePreferences[type];
        if (typePrefs) {
            return allowed.filter((method) => {
                switch (method) {
                    case notification_type_vo_1.DeliveryMethod.PUSH:
                        return typePrefs.push !== false;
                    case notification_type_vo_1.DeliveryMethod.IN_APP:
                        return typePrefs.inApp !== false;
                    case notification_type_vo_1.DeliveryMethod.TOAST:
                        return typePrefs.toast !== false;
                    default:
                        return true;
                }
            });
        }
        return allowed;
    }
};
exports.NotificationPreferenceService = NotificationPreferenceService;
exports.NotificationPreferenceService = NotificationPreferenceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('NotificationPreferenceRepository')),
    __metadata("design:paramtypes", [Object])
], NotificationPreferenceService);
//# sourceMappingURL=notification-preference.service.js.map