export interface UserProps {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    balance: number;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare class User {
    private readonly props;
    constructor(props: UserProps);
    private validate;
    get id(): string;
    get email(): string;
    get firstName(): string;
    get lastName(): string;
    get balance(): number;
    get emailVerified(): boolean;
    get createdAt(): Date;
    get updatedAt(): Date;
    get fullName(): string;
    toJSON(): {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        balance: number;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
}
