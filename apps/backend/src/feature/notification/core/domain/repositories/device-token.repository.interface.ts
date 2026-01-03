import { DeviceToken } from '../entities/device-token.entity';

export interface IDeviceTokenRepository {
  create(deviceToken: Partial<DeviceToken>): Promise<DeviceToken>;
  findByToken(expoPushToken: string): Promise<DeviceToken | null>;
  findActiveByUserId(userId: string): Promise<DeviceToken[]>;
  deactivate(id: string): Promise<void>;
  delete(expoPushToken: string, userId: string): Promise<void>;
  updateLastUsed(id: string): Promise<void>;
}
