import { IDeviceTokenRepository } from '../../domain/repositories/device-token.repository.interface';
import { DeviceToken } from '../../domain/entities/device-token.entity';
export interface RegisterDeviceTokenDto {
    userId: string;
    expoPushToken: string;
    platform?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class RegisterDeviceTokenUseCase {
    private readonly deviceTokenRepository;
    constructor(deviceTokenRepository: IDeviceTokenRepository);
    execute(dto: RegisterDeviceTokenDto): Promise<DeviceToken>;
}
