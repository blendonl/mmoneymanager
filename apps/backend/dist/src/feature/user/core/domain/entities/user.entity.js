"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id?.trim())
            throw new Error('User ID is required');
        if (!props.email?.includes('@'))
            throw new Error('Valid email is required');
    }
    get id() {
        return this.props.id;
    }
    get email() {
        return this.props.email;
    }
    get firstName() {
        return this.props.firstName;
    }
    get lastName() {
        return this.props.lastName;
    }
    get balance() {
        return this.props.balance;
    }
    get emailVerified() {
        return this.props.emailVerified;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get fullName() {
        const firstName = this.props.firstName?.trim();
        const lastName = this.props.lastName?.trim();
        if (firstName && lastName) {
            return `${firstName} ${lastName}`;
        }
        return firstName || lastName || 'Unknown User';
    }
    toJSON() {
        return { ...this.props };
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map