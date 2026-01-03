"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('Notification ID is required');
        }
        if (!props.userId || props.userId.trim() === '') {
            throw new Error('User ID is required');
        }
        if (!props.type) {
            throw new Error('Notification type is required');
        }
        if (!props.title || props.title.trim() === '') {
            throw new Error('Notification title is required');
        }
        if (!props.message || props.message.trim() === '') {
            throw new Error('Notification message is required');
        }
        if (!Array.isArray(props.deliveryMethods) || props.deliveryMethods.length === 0) {
            throw new Error('At least one delivery method is required');
        }
        if (!props.createdAt) {
            throw new Error('Created date is required');
        }
        if (!props.updatedAt) {
            throw new Error('Updated date is required');
        }
    }
    get id() {
        return this.props.id;
    }
    get userId() {
        return this.props.userId;
    }
    get type() {
        return this.props.type;
    }
    get priority() {
        return this.props.priority;
    }
    get title() {
        return this.props.title;
    }
    get message() {
        return this.props.message;
    }
    get data() {
        return this.props.data;
    }
    get deliveryMethods() {
        return this.props.deliveryMethods;
    }
    get isRead() {
        return this.props.isRead;
    }
    get readAt() {
        return this.props.readAt;
    }
    get isInteracted() {
        return this.props.isInteracted;
    }
    get interactedAt() {
        return this.props.interactedAt;
    }
    get actionUrl() {
        return this.props.actionUrl;
    }
    get familyId() {
        return this.props.familyId;
    }
    get transactionId() {
        return this.props.transactionId;
    }
    get invitationId() {
        return this.props.invitationId;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    markAsRead() {
        if (!this.props.isRead) {
            this.props.isRead = true;
            this.props.readAt = new Date();
            this.props.updatedAt = new Date();
        }
    }
    markAsInteracted() {
        if (!this.props.isInteracted) {
            this.props.isInteracted = true;
            this.props.interactedAt = new Date();
            this.props.updatedAt = new Date();
        }
    }
    isExpired(expiryDays = 30) {
        const expiryDate = new Date(this.props.createdAt);
        expiryDate.setDate(expiryDate.getDate() + expiryDays);
        return new Date() > expiryDate;
    }
    toJSON() {
        return { ...this.props };
    }
}
exports.Notification = Notification;
//# sourceMappingURL=notification.entity.js.map