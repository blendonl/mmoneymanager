import { Injectable } from '@nestjs/common';
import { IDateParser } from '../../interfaces/date-parser.interface';

@Injectable()
export class GenericDateParser implements IDateParser {
  private readonly DATE_PATTERNS = [
    /\d{2}[\/\-.]\d{2}[\/\-.]\d{4}/,
    /\d{4}[\/\-.]\d{2}[\/\-.]\d{2}/,
  ];

  extractDate(lines: string[]): string | undefined {
    const text = lines.join('\n');

    for (const pattern of this.DATE_PATTERNS) {
      const match = text.match(pattern);
      if (match) {
        const parsed = new Date(match[0]);
        if (!isNaN(parsed.getTime())) {
          return parsed.toString();
        }
      }
    }
    return undefined;
  }
}
