"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbanianTotalParser = void 0;
const common_1 = require("@nestjs/common");
let AlbanianTotalParser = class AlbanianTotalParser {
    TOTAL_PATTERNS = [
        /TOTAL[:\s]+(\d+[.,]\d{2})/i,
        /SUM[:\s]+(\d+[.,]\d{2})/i,
        /AMOUNT[:\s]+(\d+[.,]\d{2})/i,
        /TOTALI[:\s]+NE EURO[:\s]+(\d+[.,]\d{2})/i,
    ];
    extractTotal(text) {
        for (const pattern of this.TOTAL_PATTERNS) {
            const match = text.match(pattern);
            if (match && match[1]) {
                return this.normalizePrice(match[1]);
            }
        }
        return undefined;
    }
    normalizePrice(priceStr) {
        const cleaned = priceStr.replace(/[€$£\s]/g, '').replace(',', '.');
        return parseFloat(cleaned);
    }
};
exports.AlbanianTotalParser = AlbanianTotalParser;
exports.AlbanianTotalParser = AlbanianTotalParser = __decorate([
    (0, common_1.Injectable)()
], AlbanianTotalParser);
//# sourceMappingURL=albanian-total.parser.js.map