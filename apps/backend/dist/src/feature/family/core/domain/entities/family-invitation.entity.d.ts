export declare enum FamilyInvitationStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    CANCELLED = "CANCELLED"
}
export interface FamilyInvitationProps {
    id: string;
    familyId: string;
    inviterId: string;
    inviteeId?: string;
    inviteeEmail: string;
    status: FamilyInvitationStatus;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare class FamilyInvitation {
    private readonly props;
    constructor(props: FamilyInvitationProps);
    private validate;
    get id(): string;
    get familyId(): string;
    get inviterId(): string;
    get inviteeId(): string | undefined;
    get inviteeEmail(): string;
    get status(): FamilyInvitationStatus;
    get expiresAt(): Date;
    get createdAt(): Date;
    get updatedAt(): Date;
    isPending(): boolean;
    isExpired(): boolean;
    canBeAccepted(): boolean;
    canBeDeclined(): boolean;
    toJSON(): {
        id: string;
        familyId: string;
        inviterId: string;
        inviteeId: string | undefined;
        inviteeEmail: string;
        status: FamilyInvitationStatus;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
    };
}
