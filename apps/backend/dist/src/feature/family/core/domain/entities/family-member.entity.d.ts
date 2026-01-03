export declare enum FamilyMemberRole {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    MEMBER = "MEMBER"
}
export interface FamilyMemberProps {
    id: string;
    familyId: string;
    userId: string;
    role: FamilyMemberRole;
    balance: number;
    joinedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare class FamilyMember {
    private readonly props;
    constructor(props: FamilyMemberProps);
    private validate;
    get id(): string;
    get familyId(): string;
    get userId(): string;
    get role(): FamilyMemberRole;
    get balance(): number;
    get joinedAt(): Date;
    get createdAt(): Date;
    get updatedAt(): Date;
    isOwner(): boolean;
    isAdmin(): boolean;
    canManageMembers(): boolean;
    toJSON(): {
        id: string;
        familyId: string;
        userId: string;
        role: FamilyMemberRole;
        balance: number;
        joinedAt: Date;
        createdAt: Date;
        updatedAt: Date;
    };
}
