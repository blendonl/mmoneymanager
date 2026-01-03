import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { IDeviceTokenRepository } from '../../domain/repositories/device-token.repository.interface';
import { DeviceToken } from '../../domain/entities/device-token.entity';
export declare class PrismaDeviceTokenRepository implements IDeviceTokenRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<DeviceToken>): Promise<DeviceToken>;
    findByToken(expoPushToken: string): Promise<DeviceToken | null>;
    findActiveByUserId(userId: string): Promise<DeviceToken[]>;
    deactivate(id: string): Promise<void>;
    delete(expoPushToken: string, userId: string): Promise<void>;
    updateLastUsed(id: string): Promise<void>;
}
