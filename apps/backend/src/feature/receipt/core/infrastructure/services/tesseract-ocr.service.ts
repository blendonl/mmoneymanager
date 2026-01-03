import { Injectable, Logger } from '@nestjs/common';
import { createWorker } from 'tesseract.js';
import {
  IOcrService,
  OcrResult,
} from '../../application/services/ocr.service';

@Injectable()
export class TesseractOcrService implements IOcrService {
  private readonly logger = new Logger(TesseractOcrService.name);

  async extractText(imageBuffer: Buffer): Promise<OcrResult> {
    const worker = await createWorker('eng');

    try {
      this.logger.log('Starting OCR text extraction');
      const startTime = Date.now();

      const {
        data: { text, confidence },
      } = await worker.recognize(imageBuffer);

      const processingTime = Date.now() - startTime;
      this.logger.log(
        `OCR completed in ${processingTime}ms with confidence ${confidence}%`,
      );

      return {
        text: text.trim(),
        confidence: confidence / 100,
      };
    } catch (error) {
      this.logger.error('OCR extraction failed', error);
      throw new Error('Failed to extract text from image');
    } finally {
      await worker.terminate();
    }
  }
}
