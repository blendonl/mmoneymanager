"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionDto = void 0;
class CreateTransactionDto {
    userId;
    type;
    value;
    familyId;
    recordedAt;
    constructor(userId, type, value, recordedAt, familyId) {
        this.userId = userId;
        this.type = type;
        this.value = value;
        this.recordedAt = recordedAt;
        this.familyId = familyId;
    }
}
exports.CreateTransactionDto = CreateTransactionDto;
//# sourceMappingURL=create-transaction.dto.js.map