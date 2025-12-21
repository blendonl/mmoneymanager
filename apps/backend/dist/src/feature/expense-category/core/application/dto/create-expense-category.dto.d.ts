export declare class CreateExpenseCategoryDto {
    name: string;
    parentId?: string | null;
    isConnectedToStore: boolean;
    constructor(name: string, isConnectedToStore: boolean, parentId?: string | null);
}
