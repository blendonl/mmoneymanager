import { GetNotificationsUseCase } from '../../core/application/use-cases/get-notifications.use-case';
import { MarkNotificationAsReadUseCase } from '../../core/application/use-cases/mark-notification-as-read.use-case';
import { MarkAllAsReadUseCase } from '../../core/application/use-cases/mark-all-as-read.use-case';
import { GetUnreadCountUseCase } from '../../core/application/use-cases/get-unread-count.use-case';
import { DeleteNotificationUseCase } from '../../core/application/use-cases/delete-notification.use-case';
import { User } from '../../../user/core/domain/entities/user.entity';
import { NotificationResponseDto } from '../dto/notification-response.dto';
export declare class NotificationController {
    private readonly getNotificationsUseCase;
    private readonly markAsReadUseCase;
    private readonly markAllAsReadUseCase;
    private readonly getUnreadCountUseCase;
    private readonly deleteNotificationUseCase;
    constructor(getNotificationsUseCase: GetNotificationsUseCase, markAsReadUseCase: MarkNotificationAsReadUseCase, markAllAsReadUseCase: MarkAllAsReadUseCase, getUnreadCountUseCase: GetUnreadCountUseCase, deleteNotificationUseCase: DeleteNotificationUseCase);
    getNotifications(user: User, page?: string, limit?: string, type?: string, unreadOnly?: string): Promise<{
        data: NotificationResponseDto[];
        pagination: {
            page: number;
            limit: number;
        };
    }>;
    getUnreadCount(user: User): Promise<{
        count: number;
    }>;
    markAsRead(id: string, user: User): Promise<void>;
    markAllAsRead(user: User): Promise<void>;
    deleteNotification(id: string, user: User): Promise<void>;
}
