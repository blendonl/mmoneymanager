export interface IncomeCategoryProps {
    id: string;
    parentId: string | null;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class IncomeCategory {
    private readonly props;
    constructor(props: IncomeCategoryProps);
    private validate;
    get id(): string;
    get parentId(): string | null;
    get name(): string;
    get createdAt(): Date;
    get updatedAt(): Date;
    toJSON(): {
        id: string;
        parentId: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
