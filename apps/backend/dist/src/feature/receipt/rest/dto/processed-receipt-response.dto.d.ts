import { EnrichedReceiptDataDto } from '../../core/application/dto/enriched-receipt-data.dto';
declare class ProcessedStoreDto {
    id?: string;
    name: string;
    location: string;
}
declare class ProcessedItemDto {
    id?: string;
    name: string;
    price: number;
    quantity: number;
    category?: string;
}
export declare class ProcessedReceiptResponseDto {
    store: ProcessedStoreDto | null;
    items: ProcessedItemDto[];
    recordedAt?: string;
    extractedText: string;
    confidence: number;
    preprocessingApplied?: string[];
    parserUsed?: string;
    static fromData(data: EnrichedReceiptDataDto): ProcessedReceiptResponseDto;
}
export {};
