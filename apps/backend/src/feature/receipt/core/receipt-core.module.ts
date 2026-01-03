import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TesseractOcrService } from './infrastructure/services/tesseract-ocr.service';
import { PaddleOcrHttpService } from './infrastructure/services/paddleocr-http.service';
import { ProcessReceiptUseCase } from './application/use-cases/process-receipt.use-case';
import { EnrichReceiptDataUseCase } from './application/use-cases/enrich-receipt-data.use-case';
import { IOcrService } from './application/services/ocr.service';
import { IImagePreprocessingService } from './application/services/image-preprocessing.service';
import { IReceiptParserService } from './application/services/receipt-parser.service';
import { SharpPreprocessingService } from './infrastructure/services/sharp-preprocessing.service';
import { ReceiptParserFactory } from './infrastructure/services/parsers/parser-factory.service';
import { StoreCoreModule } from '~feature/store/core/store-core.module';
import { AlbanianReceiptParser } from './infrastructure/services/parsers/albanian-receipt.parser';
import { AlbanianStoreNameParser } from './infrastructure/services/parsers/implementations/albanian/albanian-store-name.parser';
import { AlbanianStoreLocationParser } from './infrastructure/services/parsers/implementations/albanian/albanian-store-location.parser';
import { AlbanianDateParser } from './infrastructure/services/parsers/implementations/albanian/albanian-date.parser';
import { AlbanianTimeParser } from './infrastructure/services/parsers/implementations/albanian/albanian-time.parser';
import { AlbanianItemsParser } from './infrastructure/services/parsers/implementations/albanian/albanian-items.parser';
import { AlbanianTotalParser } from './infrastructure/services/parsers/implementations/albanian/albanian-total.parser';
import { GenericReceiptParser } from './infrastructure/services/parsers/generic-receipt.parser';
import { GenericStoreNameParser } from './infrastructure/services/parsers/implementations/generic/generic-store-name.parser';
import { GenericStoreLocationParser } from './infrastructure/services/parsers/implementations/generic/generic-store-location.parser';
import { GenericDateParser } from './infrastructure/services/parsers/implementations/generic/generic-date.parser';
import { GenericTimeParser } from './infrastructure/services/parsers/implementations/generic/generic-time.parser';
import { GenericItemsParser } from './infrastructure/services/parsers/implementations/generic/generic-items.parser';
import { GenericTotalParser } from './infrastructure/services/parsers/implementations/generic/generic-total.parser';

@Module({
  imports: [ConfigModule, StoreCoreModule],
  providers: [
    {
      provide: 'OcrService',
      useFactory: (configService: ConfigService): IOcrService => {
        const engine = configService.get<string>('OCR_ENGINE', 'paddleocr');
        return engine === 'paddleocr'
          ? new PaddleOcrHttpService(configService)
          : new TesseractOcrService();
      },
      inject: [ConfigService],
    },
    {
      provide: 'ImagePreprocessingService',
      useFactory: (
        configService: ConfigService,
      ): IImagePreprocessingService => {
        return new SharpPreprocessingService(configService);
      },
      inject: [ConfigService],
    },
    AlbanianStoreNameParser,
    AlbanianStoreLocationParser,
    AlbanianDateParser,
    AlbanianTimeParser,
    AlbanianItemsParser,
    AlbanianTotalParser,
    AlbanianReceiptParser,
    GenericStoreNameParser,
    GenericStoreLocationParser,
    GenericDateParser,
    GenericTimeParser,
    GenericItemsParser,
    GenericTotalParser,
    GenericReceiptParser,
    {
      provide: 'ReceiptParserService',
      useClass: ReceiptParserFactory,
    },
    ProcessReceiptUseCase,
    EnrichReceiptDataUseCase,
  ],
  exports: [ProcessReceiptUseCase, EnrichReceiptDataUseCase],
})
export class ReceiptCoreModule {}
