export interface ExpenseCategoryProps {
    id: string;
    parentId: string | null;
    name: string;
    isConnectedToStore: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare class ExpenseCategory {
    private readonly props;
    constructor(props: ExpenseCategoryProps);
    private validate;
    get id(): string;
    get parentId(): string | null;
    get name(): string;
    get createdAt(): Date;
    get updatedAt(): Date;
    get isConnectedToStore(): boolean;
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
