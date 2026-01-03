"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessedReceiptResponseDto = void 0;
class ProcessedStoreDto {
    id;
    name;
    location;
}
class ProcessedItemDto {
    id;
    name;
    price;
    quantity;
    category;
}
class ProcessedReceiptResponseDto {
    store;
    items;
    recordedAt;
    extractedText;
    confidence;
    preprocessingApplied;
    parserUsed;
    static fromData(data) {
        const dto = new ProcessedReceiptResponseDto();
        dto.store = data.store;
        dto.items = data.items;
        dto.recordedAt = data.recordedAt?.toISOString();
        dto.extractedText = data.extractedText;
        dto.confidence = data.confidence;
        dto.preprocessingApplied = data.preprocessingApplied;
        dto.parserUsed = data.parserUsed;
        return dto;
    }
}
exports.ProcessedReceiptResponseDto = ProcessedReceiptResponseDto;
//# sourceMappingURL=processed-receipt-response.dto.js.map