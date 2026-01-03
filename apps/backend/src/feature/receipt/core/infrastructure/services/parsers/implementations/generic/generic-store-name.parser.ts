import { Injectable } from '@nestjs/common';
import { IStoreNameParser } from '../../interfaces/store-name-parser.interface';

@Injectable()
export class GenericStoreNameParser implements IStoreNameParser {
  extractStoreName(lines: string[]): string {
    const filteredLines = lines.filter((line) => line.length > 2);
    return filteredLines[0]?.trim() || 'Unknown Store';
  }
}
