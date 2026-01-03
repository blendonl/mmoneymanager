import { Prisma } from 'prisma/generated/prisma/client';
import { DeviceToken } from '../../domain/entities/device-token.entity';

type PrismaDeviceToken = Prisma.DeviceTokenGetPayload<object>;

export class DeviceTokenMapper {
  static toDomain(prismaToken: PrismaDeviceToken): DeviceToken {
    return new DeviceToken({
      id: prismaToken.id,
      userId: prismaToken.userId,
      expoPushToken: prismaToken.expoPushToken,
      platform: prismaToken.platform || undefined,
      deviceId: prismaToken.deviceId || undefined,
      deviceName: prismaToken.deviceName || undefined,
      isActive: prismaToken.isActive,
      lastUsed: prismaToken.lastUsed,
      createdAt: prismaToken.createdAt,
      updatedAt: prismaToken.updatedAt,
    });
  }

  static toPersistence(token: DeviceToken) {
    return {
      id: token.id,
      userId: token.userId,
      expoPushToken: token.expoPushToken,
      platform: token.platform,
      deviceId: token.deviceId,
      deviceName: token.deviceName,
      isActive: token.isActive,
      lastUsed: token.lastUsed,
      createdAt: token.createdAt,
      updatedAt: token.updatedAt,
    };
  }
}
