export class EnrichedReceiptStoreDto {
  id?: string;
  name: string;
  location: string;
}

export class EnrichedReceiptItemDto {
  id?: string;
  name: string;
  price: number;
  quantity: number;
}

export class EnrichedReceiptDataDto {
  store: EnrichedReceiptStoreDto;
  items: EnrichedReceiptItemDto[];
  recordedAt?: Date;
  extractedText: string;
  confidence: number;
  preprocessingApplied?: string[];
  parserUsed?: string;
}
