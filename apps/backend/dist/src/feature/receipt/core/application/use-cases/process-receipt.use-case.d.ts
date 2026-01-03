import { ConfigService } from '@nestjs/config';
import { IOcrService } from '../services/ocr.service';
import { IImagePreprocessingService } from '../services/image-preprocessing.service';
import { IReceiptParserService } from '../services/receipt-parser.service';
export interface ProcessedReceiptData {
    storeName: string;
    storeLocation: string;
    items: Array<{
        name: string;
        price: number;
        quantity: number;
    }>;
    recordedAt?: Date;
    extractedText: string;
    confidence: number;
    preprocessingApplied?: string[];
    parserUsed?: string;
}
export declare class ProcessReceiptUseCase {
    private readonly ocrService;
    private readonly preprocessingService;
    private readonly parserService;
    private readonly configService;
    private readonly logger;
    constructor(ocrService: IOcrService, preprocessingService: IImagePreprocessingService, parserService: IReceiptParserService, configService: ConfigService);
    execute(imageBuffer: Buffer): Promise<ProcessedReceiptData>;
}
