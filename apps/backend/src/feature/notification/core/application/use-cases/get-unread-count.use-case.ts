import { Injectable, Inject } from '@nestjs/common';
import { INotificationRepository } from '../../domain/repositories/notification.repository.interface';

@Injectable()
export class GetUnreadCountUseCase {
  constructor(
    @Inject('NotificationRepository')
    private readonly notificationRepository: INotificationRepository,
  ) {}

  async execute(userId: string): Promise<number> {
    return await this.notificationRepository.getUnreadCount(userId);
  }
}
