export interface DeviceTokenProps {
    id: string;
    userId: string;
    expoPushToken: string;
    platform?: string;
    deviceId?: string;
    deviceName?: string;
    isActive: boolean;
    lastUsed: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare class DeviceToken {
    private props;
    constructor(props: DeviceTokenProps);
    private validate;
    get id(): string;
    get userId(): string;
    get expoPushToken(): string;
    get platform(): string | undefined;
    get deviceId(): string | undefined;
    get deviceName(): string | undefined;
    get isActive(): boolean;
    get lastUsed(): Date;
    get createdAt(): Date;
    get updatedAt(): Date;
    deactivate(): void;
    updateLastUsed(): void;
    toJSON(): DeviceTokenProps;
}
