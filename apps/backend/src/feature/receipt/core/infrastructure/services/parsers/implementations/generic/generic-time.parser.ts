import { Injectable } from '@nestjs/common';
import { ITimeParser } from '../../interfaces/time-parser.interface';

@Injectable()
export class GenericTimeParser implements ITimeParser {
  extractTime(lines: string[]): string | undefined {
    return undefined;
  }
}
