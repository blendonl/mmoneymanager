export interface StoreProps {
    id: string;
    name: string;
    location: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class Store {
    private readonly props;
    constructor(props: StoreProps);
    private validate;
    get id(): string;
    get name(): string;
    get location(): string;
    get createdAt(): Date;
    get updatedAt(): Date;
    toJSON(): {
        id: string;
        name: string;
        location: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
