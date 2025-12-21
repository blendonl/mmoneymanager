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
        if (!props.firstName?.trim())
            throw new Error('First name is required');
        if (!props.lastName?.trim())
            throw new Error('Last name is required');
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
        return `${this.props.firstName} ${this.props.lastName}`;
    }
    toJSON() {
        return { ...this.props };
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map