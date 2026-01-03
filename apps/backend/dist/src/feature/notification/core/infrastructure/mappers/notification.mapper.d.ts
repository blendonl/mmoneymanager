import { Prisma } from 'prisma/generated/prisma/client';
import { Notification } from '../../domain/entities/notification.entity';
import { NotificationType, NotificationPriority, DeliveryMethod } from '../../domain/value-objects/notification-type.vo';
type PrismaNotification = Prisma.NotificationGetPayload<object>;
export declare class NotificationMapper {
    static toDomain(prismaNotification: PrismaNotification): Notification;
    static toPersistence(notification: Notification): {
        id: string;
        userId: string;
        type: NotificationType;
        priority: NotificationPriority;
        title: string;
        message: string;
        data: Record<string, any> | undefined;
        deliveryMethods: DeliveryMethod[];
        isRead: boolean;
        readAt: Date | undefined;
        isInteracted: boolean;
        interactedAt: Date | undefined;
        actionUrl: string | undefined;
        familyId: string | undefined;
        transactionId: string | undefined;
        invitationId: string | undefined;
        createdAt: Date;
        updatedAt: Date;
    };
}
export {};
