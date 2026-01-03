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
exports.ExpoPushNotificationService = void 0;
const common_1 = require("@nestjs/common");
const expo_server_sdk_1 = require("expo-server-sdk");
let ExpoPushNotificationService = class ExpoPushNotificationService {
    deviceTokenRepository;
    expo;
    constructor(deviceTokenRepository) {
        this.deviceTokenRepository = deviceTokenRepository;
        this.expo = new expo_server_sdk_1.Expo();
    }
    async sendToUser(userId, notification) {
        const deviceTokens = await this.deviceTokenRepository.findActiveByUserId(userId);
        if (deviceTokens.length === 0) {
            console.log(`No device tokens found for user ${userId}`);
            return;
        }
        const messages = deviceTokens
            .filter((token) => expo_server_sdk_1.Expo.isExpoPushToken(token.expoPushToken))
            .map((token) => ({
            to: token.expoPushToken,
            sound: 'default',
            title: notification.title,
            body: notification.message,
            data: notification.data || {},
        }));
        if (messages.length === 0) {
            console.log(`No valid Expo push tokens for user ${userId}`);
            return;
        }
        const chunks = this.expo.chunkPushNotifications(messages);
        const tickets = [];
        for (const chunk of chunks) {
            try {
                const ticketChunk = await this.expo.sendPushNotificationsAsync(chunk);
                tickets.push(...ticketChunk);
            }
            catch (error) {
                console.error('Error sending push notification chunk:', error);
            }
        }
        await this.handleInvalidTokens(tickets, deviceTokens);
    }
    async handleInvalidTokens(tickets, deviceTokens) {
        tickets.forEach((ticket, index) => {
            if (ticket.status === 'error') {
                if (ticket.details?.error === 'DeviceNotRegistered' ||
                    ticket.details?.error === 'InvalidCredentials') {
                    const token = deviceTokens[index];
                    if (token) {
                        this.deviceTokenRepository.deactivate(token.id);
                    }
                }
            }
        });
    }
};
exports.ExpoPushNotificationService = ExpoPushNotificationService;
exports.ExpoPushNotificationService = ExpoPushNotificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DeviceTokenRepository')),
    __metadata("design:paramtypes", [Object])
], ExpoPushNotificationService);
//# sourceMappingURL=expo-push-notification.service.js.map