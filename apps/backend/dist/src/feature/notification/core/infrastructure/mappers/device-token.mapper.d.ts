import { Prisma } from 'prisma/generated/prisma/client';
import { DeviceToken } from '../../domain/entities/device-token.entity';
type PrismaDeviceToken = Prisma.DeviceTokenGetPayload<object>;
export declare class DeviceTokenMapper {
    static toDomain(prismaToken: PrismaDeviceToken): DeviceToken;
    static toPersistence(token: DeviceToken): {
        id: string;
        userId: string;
        expoPushToken: string;
        platform: string | undefined;
        deviceId: string | undefined;
        deviceName: string | undefined;
        isActive: boolean;
        lastUsed: Date;
        createdAt: Date;
        updatedAt: Date;
    };
}
export {};
