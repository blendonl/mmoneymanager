export declare class UpdatePreferenceRequestDto {
    enablePushNotifications?: boolean;
    enableInAppNotifications?: boolean;
    enableToastNotifications?: boolean;
    quietHoursEnabled?: boolean;
    quietHoursStart?: Date;
    quietHoursEnd?: Date;
    typePreferences?: Record<string, any>;
}
