"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TesseractOcrService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesseractOcrService = void 0;
const common_1 = require("@nestjs/common");
const tesseract_js_1 = require("tesseract.js");
let TesseractOcrService = TesseractOcrService_1 = class TesseractOcrService {
    logger = new common_1.Logger(TesseractOcrService_1.name);
    async extractText(imageBuffer) {
        const worker = await (0, tesseract_js_1.createWorker)('eng');
        try {
            this.logger.log('Starting OCR text extraction');
            const startTime = Date.now();
            const { data: { text, confidence }, } = await worker.recognize(imageBuffer);
            const processingTime = Date.now() - startTime;
            this.logger.log(`OCR completed in ${processingTime}ms with confidence ${confidence}%`);
            return {
                text: text.trim(),
                confidence: confidence / 100,
            };
        }
        catch (error) {
            this.logger.error('OCR extraction failed', error);
            throw new Error('Failed to extract text from image');
        }
        finally {
            await worker.terminate();
        }
    }
};
exports.TesseractOcrService = TesseractOcrService;
exports.TesseractOcrService = TesseractOcrService = TesseractOcrService_1 = __decorate([
    (0, common_1.Injectable)()
], TesseractOcrService);
//# sourceMappingURL=tesseract-ocr.service.js.map