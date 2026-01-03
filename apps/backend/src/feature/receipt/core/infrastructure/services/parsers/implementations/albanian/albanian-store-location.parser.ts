import { Injectable } from '@nestjs/common';
import { IStoreLocationParser } from '../../interfaces/store-location-parser.interface';

@Injectable()
export class AlbanianStoreLocationParser implements IStoreLocationParser {
  extractStoreLocation(lines: string[]): string {
    return lines[1] || '';
  }
}
