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
var PaddleOcrHttpService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaddleOcrHttpService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let PaddleOcrHttpService = PaddleOcrHttpService_1 = class PaddleOcrHttpService {
    configService;
    logger = new common_1.Logger(PaddleOcrHttpService_1.name);
    serviceUrl;
    timeout;
    maxRetries = 3;
    constructor(configService) {
        this.configService = configService;
        this.serviceUrl = this.configService.get('PADDLEOCR_SERVICE_URL', 'http://localhost:8000');
        this.timeout = this.configService.get('PADDLEOCR_TIMEOUT', 30000);
    }
    async extractText(imageBuffer) {
        let lastError = null;
        for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
            try {
                this.logger.log(`OCR extraction attempt ${attempt}/${this.maxRetries}`);
                const startTime = Date.now();
                const formData = new FormData();
                const blob = new Blob([imageBuffer], { type: 'image/png' });
                formData.append('file', blob, 'receipt.png');
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), this.timeout);
                const response = await fetch(`${this.serviceUrl}/ocr/extract`, {
                    method: 'POST',
                    body: formData,
                    signal: controller.signal,
                });
                clearTimeout(timeoutId);
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`PaddleOCR service error (${response.status}): ${errorText}`);
                }
                const result = await response.json();
                const processingTime = Date.now() - startTime;
                this.logger.log(`OCR completed in ${processingTime}ms with confidence ${(result.confidence * 100).toFixed(2)}%`);
                return {
                    text: result.text.trim(),
                    confidence: result.confidence,
                };
            }
            catch (error) {
                lastError = error;
                if (error instanceof Error && error.name === 'AbortError') {
                    this.logger.error(`OCR request timed out after ${this.timeout}ms on attempt ${attempt}`);
                }
                else {
                    this.logger.error(`OCR extraction failed on attempt ${attempt}: ${error instanceof Error ? error.message : String(error)}`);
                }
                if (attempt < this.maxRetries) {
                    const backoffDelay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
                    this.logger.log(`Retrying after ${backoffDelay}ms...`);
                    await new Promise((resolve) => setTimeout(resolve, backoffDelay));
                }
            }
        }
        this.logger.error(`All ${this.maxRetries} OCR extraction attempts failed`);
        throw new Error(`Failed to extract text from image after ${this.maxRetries} attempts: ${lastError?.message || 'Unknown error'}`);
    }
};
exports.PaddleOcrHttpService = PaddleOcrHttpService;
exports.PaddleOcrHttpService = PaddleOcrHttpService = PaddleOcrHttpService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PaddleOcrHttpService);
//# sourceMappingURL=paddleocr-http.service.js.map