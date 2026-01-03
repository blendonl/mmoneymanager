import { Injectable } from '@nestjs/common';
import { IStoreNameParser } from '../../interfaces/store-name-parser.interface';

@Injectable()
export class AlbanianStoreNameParser implements IStoreNameParser {
  extractStoreName(lines: string[]): string {
    return lines[0] || 'Unknown Store';
  }
}
