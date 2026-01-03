"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceToken = void 0;
class DeviceToken {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('DeviceToken ID is required');
        }
        if (!props.userId || props.userId.trim() === '') {
            throw new Error('User ID is required');
        }
        if (!props.expoPushToken || props.expoPushToken.trim() === '') {
            throw new Error('Expo push token is required');
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
    get expoPushToken() {
        return this.props.expoPushToken;
    }
    get platform() {
        return this.props.platform;
    }
    get deviceId() {
        return this.props.deviceId;
    }
    get deviceName() {
        return this.props.deviceName;
    }
    get isActive() {
        return this.props.isActive;
    }
    get lastUsed() {
        return this.props.lastUsed;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    deactivate() {
        this.props.isActive = false;
        this.props.updatedAt = new Date();
    }
    updateLastUsed() {
        this.props.lastUsed = new Date();
        this.props.updatedAt = new Date();
    }
    toJSON() {
        return { ...this.props };
    }
}
exports.DeviceToken = DeviceToken;
//# sourceMappingURL=device-token.entity.js.map