import { Injectable, Inject } from '@nestjs/common';
import { IDeviceTokenRepository } from '../../domain/repositories/device-token.repository.interface';

@Injectable()
export class UnregisterDeviceTokenUseCase {
  constructor(
    @Inject('DeviceTokenRepository')
    private readonly deviceTokenRepository: IDeviceTokenRepository,
  ) {}

  async execute(expoPushToken: string, userId: string): Promise<void> {
    await this.deviceTokenRepository.delete(expoPushToken, userId);
  }
}
