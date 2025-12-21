export declare class Pagination {
    page: number;
    limit: number;
    constructor(page?: number, limit?: number);
    get skip(): number;
    get take(): number;
}
