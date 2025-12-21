"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
class Pagination {
    page;
    limit;
    constructor(page = 1, limit = 10) {
        this.page = Math.max(1, page);
        this.limit = Math.min(Math.max(1, limit), 100);
    }
    get skip() {
        return (this.page - 1) * this.limit;
    }
    get take() {
        return this.limit;
    }
}
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.dto.js.map