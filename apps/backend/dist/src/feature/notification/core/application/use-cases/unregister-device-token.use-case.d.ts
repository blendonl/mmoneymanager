import { IDeviceTokenRepository } from '../../domain/repositories/device-token.repository.interface';
export declare class UnregisterDeviceTokenUseCase {
    private readonly deviceTokenRepository;
    constructor(deviceTokenRepository: IDeviceTokenRepository);
    execute(expoPushToken: string, userId: string): Promise<void>;
}
