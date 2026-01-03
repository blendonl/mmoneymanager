import { GetNotificationPreferencesUseCase } from '../../core/application/use-cases/get-notification-preferences.use-case';
import { UpdateNotificationPreferencesUseCase } from '../../core/application/use-cases/update-notification-preferences.use-case';
import { RegisterDeviceTokenUseCase } from '../../core/application/use-cases/register-device-token.use-case';
import { UnregisterDeviceTokenUseCase } from '../../core/application/use-cases/unregister-device-token.use-case';
import { User } from '../../../user/core/domain/entities/user.entity';
import { UpdatePreferenceRequestDto } from '../dto/update-preference-request.dto';
import { RegisterTokenRequestDto } from '../dto/register-token-request.dto';
export declare class NotificationPreferenceController {
    private readonly getPreferencesUseCase;
    private readonly updatePreferencesUseCase;
    private readonly registerTokenUseCase;
    private readonly unregisterTokenUseCase;
    constructor(getPreferencesUseCase: GetNotificationPreferencesUseCase, updatePreferencesUseCase: UpdateNotificationPreferencesUseCase, registerTokenUseCase: RegisterDeviceTokenUseCase, unregisterTokenUseCase: UnregisterDeviceTokenUseCase);
    getPreferences(user: User): Promise<import("../../core/domain/entities").NotificationPreferenceProps>;
    updatePreferences(dto: UpdatePreferenceRequestDto, user: User): Promise<import("../../core/domain/entities").NotificationPreferenceProps>;
    registerDevice(dto: RegisterTokenRequestDto, user: User): Promise<import("../../core/domain/entities").DeviceTokenProps>;
    unregisterDevice(expoPushToken: string, user: User): Promise<void>;
}
