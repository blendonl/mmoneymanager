"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptCoreModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const tesseract_ocr_service_1 = require("./infrastructure/services/tesseract-ocr.service");
const paddleocr_http_service_1 = require("./infrastructure/services/paddleocr-http.service");
const process_receipt_use_case_1 = require("./application/use-cases/process-receipt.use-case");
const enrich_receipt_data_use_case_1 = require("./application/use-cases/enrich-receipt-data.use-case");
const sharp_preprocessing_service_1 = require("./infrastructure/services/sharp-preprocessing.service");
const parser_factory_service_1 = require("./infrastructure/services/parsers/parser-factory.service");
const store_core_module_1 = require("../../store/core/store-core.module");
const albanian_receipt_parser_1 = require("./infrastructure/services/parsers/albanian-receipt.parser");
const albanian_store_name_parser_1 = require("./infrastructure/services/parsers/implementations/albanian/albanian-store-name.parser");
const albanian_store_location_parser_1 = require("./infrastructure/services/parsers/implementations/albanian/albanian-store-location.parser");
const albanian_date_parser_1 = require("./infrastructure/services/parsers/implementations/albanian/albanian-date.parser");
const albanian_time_parser_1 = require("./infrastructure/services/parsers/implementations/albanian/albanian-time.parser");
const albanian_items_parser_1 = require("./infrastructure/services/parsers/implementations/albanian/albanian-items.parser");
const albanian_total_parser_1 = require("./infrastructure/services/parsers/implementations/albanian/albanian-total.parser");
const generic_receipt_parser_1 = require("./infrastructure/services/parsers/generic-receipt.parser");
const generic_store_name_parser_1 = require("./infrastructure/services/parsers/implementations/generic/generic-store-name.parser");
const generic_store_location_parser_1 = require("./infrastructure/services/parsers/implementations/generic/generic-store-location.parser");
const generic_date_parser_1 = require("./infrastructure/services/parsers/implementations/generic/generic-date.parser");
const generic_time_parser_1 = require("./infrastructure/services/parsers/implementations/generic/generic-time.parser");
const generic_items_parser_1 = require("./infrastructure/services/parsers/implementations/generic/generic-items.parser");
const generic_total_parser_1 = require("./infrastructure/services/parsers/implementations/generic/generic-total.parser");
let ReceiptCoreModule = class ReceiptCoreModule {
};
exports.ReceiptCoreModule = ReceiptCoreModule;
exports.ReceiptCoreModule = ReceiptCoreModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule, store_core_module_1.StoreCoreModule],
        providers: [
            {
                provide: 'OcrService',
                useFactory: (configService) => {
                    const engine = configService.get('OCR_ENGINE', 'paddleocr');
                    return engine === 'paddleocr'
                        ? new paddleocr_http_service_1.PaddleOcrHttpService(configService)
                        : new tesseract_ocr_service_1.TesseractOcrService();
                },
                inject: [config_1.ConfigService],
            },
            {
                provide: 'ImagePreprocessingService',
                useFactory: (configService) => {
                    return new sharp_preprocessing_service_1.SharpPreprocessingService(configService);
                },
                inject: [config_1.ConfigService],
            },
            albanian_store_name_parser_1.AlbanianStoreNameParser,
            albanian_store_location_parser_1.AlbanianStoreLocationParser,
            albanian_date_parser_1.AlbanianDateParser,
            albanian_time_parser_1.AlbanianTimeParser,
            albanian_items_parser_1.AlbanianItemsParser,
            albanian_total_parser_1.AlbanianTotalParser,
            albanian_receipt_parser_1.AlbanianReceiptParser,
            generic_store_name_parser_1.GenericStoreNameParser,
            generic_store_location_parser_1.GenericStoreLocationParser,
            generic_date_parser_1.GenericDateParser,
            generic_time_parser_1.GenericTimeParser,
            generic_items_parser_1.GenericItemsParser,
            generic_total_parser_1.GenericTotalParser,
            generic_receipt_parser_1.GenericReceiptParser,
            {
                provide: 'ReceiptParserService',
                useClass: parser_factory_service_1.ReceiptParserFactory,
            },
            process_receipt_use_case_1.ProcessReceiptUseCase,
            enrich_receipt_data_use_case_1.EnrichReceiptDataUseCase,
        ],
        exports: [process_receipt_use_case_1.ProcessReceiptUseCase, enrich_receipt_data_use_case_1.EnrichReceiptDataUseCase],
    })
], ReceiptCoreModule);
//# sourceMappingURL=receipt-core.module.js.map