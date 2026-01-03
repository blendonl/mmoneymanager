"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ProcessReceiptUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessReceiptUseCase = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let ProcessReceiptUseCase = ProcessReceiptUseCase_1 = class ProcessReceiptUseCase {
    ocrService;
    preprocessingService;
    parserService;
    configService;
    logger = new common_1.Logger(ProcessReceiptUseCase_1.name);
    constructor(ocrService, preprocessingService, parserService, configService) {
        this.ocrService = ocrService;
        this.preprocessingService = preprocessingService;
        this.parserService = parserService;
        this.configService = configService;
    }
    async execute(imageBuffer) {
        const preprocessingEnabled = this.configService.get('IMAGE_PREPROCESSING_ENABLED', true);
        let preprocessed;
        let bufferToUse = imageBuffer;
        if (preprocessingEnabled) {
            try {
                preprocessed = await this.preprocessingService.preprocess(imageBuffer);
                bufferToUse = preprocessed.processedBuffer;
            }
            catch (error) {
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
};
exports.ProcessReceiptUseCase = ProcessReceiptUseCase;
exports.ProcessReceiptUseCase = ProcessReceiptUseCase = ProcessReceiptUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('OcrService')),
    __param(1, (0, common_1.Inject)('ImagePreprocessingService')),
    __param(2, (0, common_1.Inject)('ReceiptParserService')),
    __metadata("design:paramtypes", [Object, Object, Object, config_1.ConfigService])
], ProcessReceiptUseCase);
//# sourceMappingURL=process-receipt.use-case.js.map