import { Injectable } from '@nestjs/common';
import { IDateParser } from '../../interfaces/date-parser.interface';

@Injectable()
export class AlbanianDateParser implements IDateParser {
  private readonly DATE_REGEX = /\b\d{2}-\d{2}-\d{4}\b/;

  extractDate(lines: string[]): string | undefined {
    const dateLine = this.findDateLine(lines);
    const match = dateLine?.match(this.DATE_REGEX);
    return match?.[0] ?? undefined;
  }

  private findDateLine(lines: string[]): string | undefined {
    return lines.find((line) => this.DATE_REGEX.test(line));
  }
}
