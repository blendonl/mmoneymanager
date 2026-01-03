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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNotificationPreferenceRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../../common/prisma/prisma.service");
const notification_preference_mapper_1 = require("../mappers/notification-preference.mapper");
const uuid_1 = require("uuid");
let PrismaNotificationPreferenceRepository = class PrismaNotificationPreferenceRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const preference = await this.prisma.notificationPreference.create({
            data: {
                id: data.id ?? (0, uuid_1.v4)(),
                userId: data.userId,
                enablePushNotifications: data.enablePushNotifications ?? true,
                enableInAppNotifications: data.enableInAppNotifications ?? true,
                enableToastNotifications: data.enableToastNotifications ?? true,
                quietHoursEnabled: data.quietHoursEnabled ?? false,
                quietHoursStart: data.quietHoursStart,
                quietHoursEnd: data.quietHoursEnd,
                typePreferences: data.typePreferences ?? {},
            },
        });
        return notification_preference_mapper_1.NotificationPreferenceMapper.toDomain(preference);
    }
    async findByUserId(userId) {
        const preference = await this.prisma.notificationPreference.findUnique({
            where: { userId },
        });
        if (!preference) {
            return null;
        }
        return notification_preference_mapper_1.NotificationPreferenceMapper.toDomain(preference);
    }
    async update(userId, data) {
        const preference = await this.prisma.notificationPreference.update({
            where: { userId },
            data: {
                enablePushNotifications: data.enablePushNotifications,
                enableInAppNotifications: data.enableInAppNotifications,
                enableToastNotifications: data.enableToastNotifications,
                quietHoursEnabled: data.quietHoursEnabled,
                quietHoursStart: data.quietHoursStart,
                quietHoursEnd: data.quietHoursEnd,
                typePreferences: data.typePreferences,
                updatedAt: new Date(),
            },
        });
        return notification_preference_mapper_1.NotificationPreferenceMapper.toDomain(preference);
    }
    async getOrCreateDefaults(userId) {
        const existing = await this.findByUserId(userId);
        if (existing) {
            return existing;
        }
        return await this.create({
            userId,
            enablePushNotifications: true,
            enableInAppNotifications: true,
            enableToastNotifications: true,
            quietHoursEnabled: false,
            typePreferences: {},
        });
    }
};
exports.PrismaNotificationPreferenceRepository = PrismaNotificationPreferenceRepository;
exports.PrismaNotificationPreferenceRepository = PrismaNotificationPreferenceRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaNotificationPreferenceRepository);
//# sourceMappingURL=prisma-notification-preference.repository.js.map