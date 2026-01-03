import { Injectable, Inject } from '@nestjs/common';
import { INotificationPreferenceRepository } from '../../domain/repositories/notification-preference.repository.interface';
import { NotificationPreference } from '../../domain/entities/notification-preference.entity';

@Injectable()
export class GetNotificationPreferencesUseCase {
  constructor(
    @Inject('NotificationPreferenceRepository')
    private readonly preferenceRepository: INotificationPreferenceRepository,
  ) {}

  async execute(userId: string): Promise<NotificationPreference> {
    return await this.preferenceRepository.getOrCreateDefaults(userId);
  }
}
