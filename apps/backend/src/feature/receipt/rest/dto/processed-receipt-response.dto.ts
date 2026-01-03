import { EnrichedReceiptDataDto } from '../../core/application/dto/enriched-receipt-data.dto';

class ProcessedStoreDto {
  id?: string;
  name: string;
  location: string;
}

class ProcessedItemDto {
  id?: string;
  name: string;
  price: number;
  quantity: number;
  category?: string;
}

export class ProcessedReceiptResponseDto {
  store: ProcessedStoreDto | null;
  items: ProcessedItemDto[];
  recordedAt?: string;
  extractedText: string;
  confidence: number;
  preprocessingApplied?: string[];
  parserUsed?: string;

  static fromData(data: EnrichedReceiptDataDto): ProcessedReceiptResponseDto {
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
