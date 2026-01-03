import { INotificationRepository } from '../../domain/repositories/notification.repository.interface';
export declare class MarkNotificationAsReadUseCase {
    private readonly notificationRepository;
    constructor(notificationRepository: INotificationRepository);
    execute(notificationId: string, userId: string): Promise<void>;
}
