export interface ExpenseItemCategoryProps {
    id: string;
    parentId: string | null;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class ExpenseItemCategory {
    private readonly props;
    constructor(props: ExpenseItemCategoryProps);
    private validate;
    get id(): string;
    get parentId(): string | null;
    get name(): string;
    get createdAt(): Date;
    get updatedAt(): Date;
    isRoot(): boolean;
    isChildOf(parentId: string): boolean;
    toJSON(): {
        id: string;
        parentId: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
