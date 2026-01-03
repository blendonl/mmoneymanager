export interface FamilyProps {
    id: string;
    name: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class Family {
    private readonly props;
    constructor(props: FamilyProps);
    private validate;
    get id(): string;
    get name(): string;
    get balance(): number;
    get createdAt(): Date;
    get updatedAt(): Date;
    toJSON(): {
        id: string;
        name: string;
        balance: number;
        createdAt: Date;
        updatedAt: Date;
    };
}
