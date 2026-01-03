"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrichedReceiptDataDto = exports.EnrichedReceiptItemDto = exports.EnrichedReceiptStoreDto = void 0;
class EnrichedReceiptStoreDto {
    id;
    name;
    location;
}
exports.EnrichedReceiptStoreDto = EnrichedReceiptStoreDto;
class EnrichedReceiptItemDto {
    id;
    name;
    price;
    quantity;
}
exports.EnrichedReceiptItemDto = EnrichedReceiptItemDto;
class EnrichedReceiptDataDto {
    store;
    items;
    recordedAt;
    extractedText;
    confidence;
    preprocessingApplied;
    parserUsed;
}
exports.EnrichedReceiptDataDto = EnrichedReceiptDataDto;
//# sourceMappingURL=enriched-receipt-data.dto.js.map