import { INotificationRepository, NotificationFilters } from '../../domain/repositories/notification.repository.interface';
import { Notification } from '../../domain/entities/notification.entity';
export declare class GetNotificationsUseCase {
    private readonly notificationRepository;
    constructor(notificationRepository: INotificationRepository);
    execute(filters: NotificationFilters): Promise<Notification[]>;
}
