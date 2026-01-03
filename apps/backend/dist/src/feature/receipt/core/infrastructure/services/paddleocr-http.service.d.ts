import { ConfigService } from '@nestjs/config';
import { IOcrService, OcrResult } from '../../application/services/ocr.service';
export declare class PaddleOcrHttpService implements IOcrService {
    private readonly configService;
    private readonly logger;
    private readonly serviceUrl;
    private readonly timeout;
    private readonly maxRetries;
    constructor(configService: ConfigService);
    extractText(imageBuffer: Buffer): Promise<OcrResult>;
}
