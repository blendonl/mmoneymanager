export interface ItemProps {
    id: string;
    categoryId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class Item {
    private readonly props;
    constructor(props: ItemProps);
    private validate;
    get id(): string;
    get categoryId(): string;
    get name(): string;
    get createdAt(): Date;
    get updatedAt(): Date;
    toJSON(): {
        id: string;
        categoryId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
