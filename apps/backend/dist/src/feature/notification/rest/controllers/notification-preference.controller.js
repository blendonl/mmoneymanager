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
exports.NotificationPreferenceController = void 0;
const common_1 = require("@nestjs/common");
const get_notification_preferences_use_case_1 = require("../../core/application/use-cases/get-notification-preferences.use-case");
const update_notification_preferences_use_case_1 = require("../../core/application/use-cases/update-notification-preferences.use-case");
const register_device_token_use_case_1 = require("../../core/application/use-cases/register-device-token.use-case");
const unregister_device_token_use_case_1 = require("../../core/application/use-cases/unregister-device-token.use-case");
const current_user_decorator_1 = require("../../../auth/rest/decorators/current-user.decorator");
const user_entity_1 = require("../../../user/core/domain/entities/user.entity");
const update_preference_request_dto_1 = require("../dto/update-preference-request.dto");
const register_token_request_dto_1 = require("../dto/register-token-request.dto");
let NotificationPreferenceController = class NotificationPreferenceController {
    getPreferencesUseCase;
    updatePreferencesUseCase;
    registerTokenUseCase;
    unregisterTokenUseCase;
    constructor(getPreferencesUseCase, updatePreferencesUseCase, registerTokenUseCase, unregisterTokenUseCase) {
        this.getPreferencesUseCase = getPreferencesUseCase;
        this.updatePreferencesUseCase = updatePreferencesUseCase;
        this.registerTokenUseCase = registerTokenUseCase;
        this.unregisterTokenUseCase = unregisterTokenUseCase;
    }
    async getPreferences(user) {
        const preferences = await this.getPreferencesUseCase.execute(user.id);
        return preferences.toJSON();
    }
    async updatePreferences(dto, user) {
        const preferences = await this.updatePreferencesUseCase.execute({
            userId: user.id,
            ...dto,
        });
        return preferences.toJSON();
    }
    async registerDevice(dto, user) {
        const token = await this.registerTokenUseCase.execute({
            userId: user.id,
            expoPushToken: dto.expoPushToken,
            platform: dto.platform,
            deviceId: dto.deviceId,
            deviceName: dto.deviceName,
        });
        return token.toJSON();
    }
    async unregisterDevice(expoPushToken, user) {
        await this.unregisterTokenUseCase.execute(expoPushToken, user.id);
    }
};
exports.NotificationPreferenceController = NotificationPreferenceController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], NotificationPreferenceController.prototype, "getPreferences", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_preference_request_dto_1.UpdatePreferenceRequestDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], NotificationPreferenceController.prototype, "updatePreferences", null);
__decorate([
    (0, common_1.Post)('devices'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_token_request_dto_1.RegisterTokenRequestDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], NotificationPreferenceController.prototype, "registerDevice", null);
__decorate([
    (0, common_1.Delete)('devices/:token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('token')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], NotificationPreferenceController.prototype, "unregisterDevice", null);
exports.NotificationPreferenceController = NotificationPreferenceController = __decorate([
    (0, common_1.Controller)('notification-preferences'),
    __metadata("design:paramtypes", [get_notification_preferences_use_case_1.GetNotificationPreferencesUseCase,
        update_notification_preferences_use_case_1.UpdateNotificationPreferencesUseCase,
        register_device_token_use_case_1.RegisterDeviceTokenUseCase,
        unregister_device_token_use_case_1.UnregisterDeviceTokenUseCase])
], NotificationPreferenceController);
//# sourceMappingURL=notification-preference.controller.js.map