import { IDeviceTokenRepository } from '../../domain/repositories/device-token.repository.interface';
export declare class ExpoPushNotificationService {
    private readonly deviceTokenRepository;
    private expo;
    constructor(deviceTokenRepository: IDeviceTokenRepository);
    sendToUser(userId: string, notification: {
        title: string;
        message: string;
        data?: Record<string, any>;
    }): Promise<void>;
    private handleInvalidTokens;
}
