"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseReceiptParser = void 0;
class BaseReceiptParser {
    extractPrices(text) {
        const pricePatterns = [
            /\d+[.,]\d{2}\s*[€$£]/g,
            /[€$£]\s*\d+[.,]\d{2}/g,
            /\d+[.,]\d{2}/g,
        ];
        const prices = [];
        for (const pattern of pricePatterns) {
            const matches = text.match(pattern);
            if (matches) {
                prices.push(...matches.map((m) => this.normalizePrice(m)));
            }
        }
        return prices;
    }
    normalizePrice(priceStr) {
        const cleaned = priceStr.replace(/[€$£\s]/g, '').replace(',', '.');
        return parseFloat(cleaned);
    }
    detectCurrency(text) {
        if (text.includes('€') || /EUR/i.test(text))
            return 'EUR';
        if (text.includes('$') || /USD/i.test(text))
            return 'USD';
        if (text.includes('£') || /GBP/i.test(text))
            return 'GBP';
        if (/LEK|ALL/i.test(text))
            return 'ALL';
        return 'UNKNOWN';
    }
    extractStoreName(text) {
        const lines = text.split('\n').filter((l) => l.trim().length > 2);
        return lines[0]?.trim() || 'Unknown Store';
    }
    extractDate(text) {
        const datePatterns = [
            /\d{2}[\/\-.]\d{2}[\/\-.]\d{4}/,
            /\d{4}[\/\-.]\d{2}[\/\-.]\d{2}/,
        ];
        for (const pattern of datePatterns) {
            const match = text.match(pattern);
            if (match) {
                const parsed = new Date(match[0]);
                if (!isNaN(parsed.getTime())) {
                    return parsed;
                }
            }
        }
        return undefined;
    }
    extractTotal(text) {
        const totalPatterns = [
            /TOTAL[:\s]+(\d+[.,]\d{2})/i,
            /SUM[:\s]+(\d+[.,]\d{2})/i,
            /AMOUNT[:\s]+(\d+[.,]\d{2})/i,
            /TOTALI[:\s]+NE EURO[:\s]+(\d+[.,]\d{2})/i,
        ];
        for (const pattern of totalPatterns) {
            const match = text.match(pattern);
            if (match && match[1]) {
                return this.normalizePrice(match[1]);
            }
        }
        return undefined;
    }
}
exports.BaseReceiptParser = BaseReceiptParser;
//# sourceMappingURL=base-receipt.parser.js.map