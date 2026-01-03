export interface NotificationPreferenceProps {
    id: string;
    userId: string;
    enablePushNotifications: boolean;
    enableInAppNotifications: boolean;
    enableToastNotifications: boolean;
    quietHoursEnabled: boolean;
    quietHoursStart?: Date;
    quietHoursEnd?: Date;
    typePreferences: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare class NotificationPreference {
    private readonly props;
    constructor(props: NotificationPreferenceProps);
    private validate;
    get id(): string;
    get userId(): string;
    get enablePushNotifications(): boolean;
    get enableInAppNotifications(): boolean;
    get enableToastNotifications(): boolean;
    get quietHoursEnabled(): boolean;
    get quietHoursStart(): Date | undefined;
    get quietHoursEnd(): Date | undefined;
    get typePreferences(): Record<string, any>;
    get createdAt(): Date;
    get updatedAt(): Date;
    toJSON(): NotificationPreferenceProps;
}
