"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericItemsParser = void 0;
const common_1 = require("@nestjs/common");
let GenericItemsParser = class GenericItemsParser {
    PRICE_PATTERN = /(\d+[.,]\d{1,2})\s*[€$£]?$/;
    QUANTITY_PATTERN = /^(\d+)\s*x\s+(.+)/i;
    extractItems(lines) {
        const items = [];
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const qtyMatch = line.match(this.QUANTITY_PATTERN);
            if (qtyMatch) {
                const quantity = parseInt(qtyMatch[1], 10);
                const restOfLine = qtyMatch[2];
                const priceMatch = restOfLine.match(this.PRICE_PATTERN);
                if (priceMatch) {
                    const price = this.normalizePrice(priceMatch[1]);
                    const name = restOfLine.replace(this.PRICE_PATTERN, '').trim();
                    items.push({ name, price, quantity, unitPrice: price / quantity });
                    continue;
                }
            }
            const priceMatch = line.match(this.PRICE_PATTERN);
            if (priceMatch) {
                const price = this.normalizePrice(priceMatch[1]);
                const name = line.replace(this.PRICE_PATTERN, '').trim();
                if (name.length > 2 &&
                    !this.isLikelyNotItem(name) &&
                    price > 0 &&
                    price < 10000) {
                    items.push({ name, price, quantity: 1, unitPrice: price });
                }
            }
        }
        return items.length > 0
            ? items
            : [{ name: 'No items parsed', price: 0, quantity: 1, unitPrice: 0 }];
    }
    normalizePrice(priceStr) {
        const cleaned = priceStr.replace(/[€$£\s]/g, '').replace(',', '.');
        return parseFloat(cleaned);
    }
    isLikelyNotItem(text) {
        const excludePatterns = [
            /^(total|sum|subtotal|tax|vat|change|cash|card)/i,
            /^(date|time|receipt|invoice)/i,
            /^(thank you|welcome|visit)/i,
        ];
        return excludePatterns.some((pattern) => pattern.test(text));
    }
};
exports.GenericItemsParser = GenericItemsParser;
exports.GenericItemsParser = GenericItemsParser = __decorate([
    (0, common_1.Injectable)()
], GenericItemsParser);
//# sourceMappingURL=generic-items.parser.js.map