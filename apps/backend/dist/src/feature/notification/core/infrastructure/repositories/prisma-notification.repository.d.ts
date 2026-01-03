import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { INotificationRepository, NotificationFilters } from '../../domain/repositories/notification.repository.interface';
import { Notification } from '../../domain/entities/notification.entity';
export declare class PrismaNotificationRepository implements INotificationRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<Notification>): Promise<Notification>;
    findById(id: string): Promise<Notification | null>;
    findByUserId(filters: NotificationFilters): Promise<Notification[]>;
    getUnreadCount(userId: string): Promise<number>;
    markAsRead(id: string, userId: string): Promise<void>;
    markAllAsRead(userId: string): Promise<void>;
    delete(id: string, userId: string): Promise<void>;
    verifyOwnership(notificationId: string, userId: string): Promise<boolean>;
}
