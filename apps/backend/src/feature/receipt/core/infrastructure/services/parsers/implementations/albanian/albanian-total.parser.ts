import { Injectable } from '@nestjs/common';
import { ITotalParser } from '../../interfaces/total-parser.interface';

@Injectable()
export class AlbanianTotalParser implements ITotalParser {
  private readonly TOTAL_PATTERNS = [
    /TOTAL[:\s]+(\d+[.,]\d{2})/i,
    /SUM[:\s]+(\d+[.,]\d{2})/i,
    /AMOUNT[:\s]+(\d+[.,]\d{2})/i,
    /TOTALI[:\s]+NE EURO[:\s]+(\d+[.,]\d{2})/i,
  ];

  extractTotal(text: string): number | undefined {
    for (const pattern of this.TOTAL_PATTERNS) {
      const match = text.match(pattern);
      if (match && match[1]) {
        return this.normalizePrice(match[1]);
      }
    }
    return undefined;
  }

  private normalizePrice(priceStr: string): number {
    const cleaned = priceStr.replace(/[€$£\s]/g, '').replace(',', '.');
    return parseFloat(cleaned);
  }
}
