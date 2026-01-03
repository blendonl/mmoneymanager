import { INotificationRepository } from '../../domain/repositories/notification.repository.interface';
export declare class GetUnreadCountUseCase {
    private readonly notificationRepository;
    constructor(notificationRepository: INotificationRepository);
    execute(userId: string): Promise<number>;
}
