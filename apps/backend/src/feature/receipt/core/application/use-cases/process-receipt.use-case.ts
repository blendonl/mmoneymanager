import { Injectable, Logger, Inject } from '@nestjs/common';
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

@Injectable()
export class ProcessReceiptUseCase {
  private readonly logger = new Logger(ProcessReceiptUseCase.name);

  constructor(
    @Inject('OcrService') private readonly ocrService: IOcrService,
    @Inject('ImagePreprocessingService')
    private readonly preprocessingService: IImagePreprocessingService,
    @Inject('ReceiptParserService')
    private readonly parserService: IReceiptParserService,
    private readonly configService: ConfigService,
  ) {}

  async execute(imageBuffer: Buffer): Promise<ProcessedReceiptData> {
    const preprocessingEnabled = this.configService.get<boolean>(
      'IMAGE_PREPROCESSING_ENABLED',
      true,
    );

    let preprocessed;
    let bufferToUse = imageBuffer;

    if (preprocessingEnabled) {
      try {
        preprocessed = await this.preprocessingService.preprocess(imageBuffer);
        bufferToUse = preprocessed.processedBuffer;
      } catch (error) {
        this.logger.error('Preprocessing failed, using original image', error);
        preprocessed = {
          processedBuffer: imageBuffer,
          appliedTransformations: [],
          originalSize: { width: 0, height: 0 },
          processedSize: { width: 0, height: 0 },
        };
      }
    }

    const ocrResult = await this.ocrService.extractText(bufferToUse);

    const parsingResult = await this.parserService.parse(ocrResult.text, {
      confidence: ocrResult.confidence,
      rawText: ocrResult.text,
    });

    return {
      ...parsingResult,
      extractedText: ocrResult.text,
      confidence: ocrResult.confidence,
      preprocessingApplied: preprocessed?.appliedTransformations,
    };
  }
}
