"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationPreferenceMapper = void 0;
const notification_preference_entity_1 = require("../../domain/entities/notification-preference.entity");
class NotificationPreferenceMapper {
    static toDomain(prismaPreference) {
        return new notification_preference_entity_1.NotificationPreference({
            id: prismaPreference.id,
            userId: prismaPreference.userId,
            enablePushNotifications: prismaPreference.enablePushNotifications,
            enableInAppNotifications: prismaPreference.enableInAppNotifications,
            enableToastNotifications: prismaPreference.enableToastNotifications,
            quietHoursEnabled: prismaPreference.quietHoursEnabled,
            quietHoursStart: prismaPreference.quietHoursStart || undefined,
            quietHoursEnd: prismaPreference.quietHoursEnd || undefined,
            typePreferences: prismaPreference.typePreferences,
            createdAt: prismaPreference.createdAt,
            updatedAt: prismaPreference.updatedAt,
        });
    }
    static toPersistence(preference) {
        return {
            id: preference.id,
            userId: preference.userId,
            enablePushNotifications: preference.enablePushNotifications,
            enableInAppNotifications: preference.enableInAppNotifications,
            enableToastNotifications: preference.enableToastNotifications,
            quietHoursEnabled: preference.quietHoursEnabled,
            quietHoursStart: preference.quietHoursStart,
            quietHoursEnd: preference.quietHoursEnd,
            typePreferences: preference.typePreferences,
            createdAt: preference.createdAt,
            updatedAt: preference.updatedAt,
        };
    }
}
exports.NotificationPreferenceMapper = NotificationPreferenceMapper;
//# sourceMappingURL=notification-preference.mapper.js.map