import {
  IReceiptParser,
  ReceiptParsingContext,
  ReceiptParsingResult,
} from '../../../application/services/receipt-parser.service';

export abstract class BaseReceiptParser implements IReceiptParser {
  abstract readonly name: string;
  abstract canParse(text: string): boolean;
  abstract parse(
    text: string,
    context: ReceiptParsingContext,
  ): Promise<ReceiptParsingResult>;

  protected extractPrices(text: string): number[] {
    const pricePatterns = [
      /\d+[.,]\d{2}\s*[€$£]/g,
      /[€$£]\s*\d+[.,]\d{2}/g,
      /\d+[.,]\d{2}/g,
    ];

    const prices: number[] = [];
    for (const pattern of pricePatterns) {
      const matches = text.match(pattern);
      if (matches) {
        prices.push(...matches.map((m) => this.normalizePrice(m)));
      }
    }
    return prices;
  }

  protected normalizePrice(priceStr: string): number {
    const cleaned = priceStr.replace(/[€$£\s]/g, '').replace(',', '.');
    return parseFloat(cleaned);
  }

  protected detectCurrency(text: string): string {
    if (text.includes('€') || /EUR/i.test(text)) return 'EUR';
    if (text.includes('$') || /USD/i.test(text)) return 'USD';
    if (text.includes('£') || /GBP/i.test(text)) return 'GBP';
    if (/LEK|ALL/i.test(text)) return 'ALL';
    return 'UNKNOWN';
  }

  protected extractStoreName(text: string): string {
    const lines = text.split('\n').filter((l) => l.trim().length > 2);
    return lines[0]?.trim() || 'Unknown Store';
  }

  protected extractDate(text: string): Date | undefined {
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

  protected extractTotal(text: string): number | undefined {
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
