import { NotificationType, NotificationPriority, DeliveryMethod } from '../value-objects/notification-type.vo';
export interface NotificationProps {
    id: string;
    userId: string;
    type: NotificationType;
    priority: NotificationPriority;
    title: string;
    message: string;
    data?: Record<string, any>;
    deliveryMethods: DeliveryMethod[];
    isRead: boolean;
    readAt?: Date;
    isInteracted: boolean;
    interactedAt?: Date;
    actionUrl?: string;
    familyId?: string;
    transactionId?: string;
    invitationId?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class Notification {
    private props;
    constructor(props: NotificationProps);
    private validate;
    get id(): string;
    get userId(): string;
    get type(): NotificationType;
    get priority(): NotificationPriority;
    get title(): string;
    get message(): string;
    get data(): Record<string, any> | undefined;
    get deliveryMethods(): DeliveryMethod[];
    get isRead(): boolean;
    get readAt(): Date | undefined;
    get isInteracted(): boolean;
    get interactedAt(): Date | undefined;
    get actionUrl(): string | undefined;
    get familyId(): string | undefined;
    get transactionId(): string | undefined;
    get invitationId(): string | undefined;
    get createdAt(): Date;
    get updatedAt(): Date;
    markAsRead(): void;
    markAsInteracted(): void;
    isExpired(expiryDays?: number): boolean;
    toJSON(): NotificationProps;
}
