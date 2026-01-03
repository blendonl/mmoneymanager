import { Injectable, Inject } from '@nestjs/common';
import { INotificationRepository } from '../../domain/repositories/notification.repository.interface';

@Injectable()
export class MarkAllAsReadUseCase {
  constructor(
    @Inject('NotificationRepository')
    private readonly notificationRepository: INotificationRepository,
  ) {}

  async execute(userId: string): Promise<void> {
    await this.notificationRepository.markAllAsRead(userId);
  }
}
