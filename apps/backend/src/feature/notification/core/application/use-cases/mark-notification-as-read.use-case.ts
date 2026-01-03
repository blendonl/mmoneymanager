import { Injectable, Inject } from '@nestjs/common';
import { INotificationRepository } from '../../domain/repositories/notification.repository.interface';

@Injectable()
export class MarkNotificationAsReadUseCase {
  constructor(
    @Inject('NotificationRepository')
    private readonly notificationRepository: INotificationRepository,
  ) {}

  async execute(notificationId: string, userId: string): Promise<void> {
    await this.notificationRepository.markAsRead(notificationId, userId);
  }
}
