import { IOcrService, OcrResult } from '../../application/services/ocr.service';
export declare class TesseractOcrService implements IOcrService {
    private readonly logger;
    extractText(imageBuffer: Buffer): Promise<OcrResult>;
}
