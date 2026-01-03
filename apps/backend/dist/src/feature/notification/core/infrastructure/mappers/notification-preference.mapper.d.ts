import { Prisma } from 'prisma/generated/prisma/client';
import { NotificationPreference } from '../../domain/entities/notification-preference.entity';
type PrismaNotificationPreference = Prisma.NotificationPreferenceGetPayload<object>;
export declare class NotificationPreferenceMapper {
    static toDomain(prismaPreference: PrismaNotificationPreference): NotificationPreference;
    static toPersistence(preference: NotificationPreference): {
        id: string;
        userId: string;
        enablePushNotifications: boolean;
        enableInAppNotifications: boolean;
        enableToastNotifications: boolean;
        quietHoursEnabled: boolean;
        quietHoursStart: Date | undefined;
        quietHoursEnd: Date | undefined;
        typePreferences: Record<string, any>;
        createdAt: Date;
        updatedAt: Date;
    };
}
export {};
