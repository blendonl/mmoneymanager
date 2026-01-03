"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationPreference = void 0;
class NotificationPreference {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('NotificationPreference ID is required');
        }
        if (!props.userId || props.userId.trim() === '') {
            throw new Error('User ID is required');
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
    get enablePushNotifications() {
        return this.props.enablePushNotifications;
    }
    get enableInAppNotifications() {
        return this.props.enableInAppNotifications;
    }
    get enableToastNotifications() {
        return this.props.enableToastNotifications;
    }
    get quietHoursEnabled() {
        return this.props.quietHoursEnabled;
    }
    get quietHoursStart() {
        return this.props.quietHoursStart;
    }
    get quietHoursEnd() {
        return this.props.quietHoursEnd;
    }
    get typePreferences() {
        return this.props.typePreferences;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    toJSON() {
        return { ...this.props };
    }
}
exports.NotificationPreference = NotificationPreference;
//# sourceMappingURL=notification-preference.entity.js.map