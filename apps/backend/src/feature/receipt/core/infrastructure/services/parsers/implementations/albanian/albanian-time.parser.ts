import { Injectable } from '@nestjs/common';
import { ITimeParser } from '../../interfaces/time-parser.interface';

@Injectable()
export class AlbanianTimeParser implements ITimeParser {
  private readonly DATE_REGEX = /\b\d{2}-\d{2}-\d{4}\b/;
  private readonly TIME_REGEX = /\b\d{2}:\d{2}\b/;

  extractTime(lines: string[]): string | undefined {
    const dateLine = this.findDateLine(lines);
    const match = dateLine?.match(this.TIME_REGEX);
    return match?.[0] ?? undefined;
  }

  private findDateLine(lines: string[]): string | undefined {
    return lines.find((line) => this.DATE_REGEX.test(line));
  }
}
