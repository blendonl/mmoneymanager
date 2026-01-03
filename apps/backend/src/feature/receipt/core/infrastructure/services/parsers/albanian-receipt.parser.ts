import { Injectable } from '@nestjs/common';
import {
  ReceiptParsingContext,
  ReceiptParsingResult,
} from '../../../application/services/receipt-parser.service';
import { BaseReceiptParser } from './base-receipt.parser';
import { AlbanianStoreNameParser } from './implementations/albanian/albanian-store-name.parser';
import { AlbanianStoreLocationParser } from './implementations/albanian/albanian-store-location.parser';
import { AlbanianDateParser } from './implementations/albanian/albanian-date.parser';
import { AlbanianTimeParser } from './implementations/albanian/albanian-time.parser';
import { AlbanianItemsParser } from './implementations/albanian/albanian-items.parser';
import { AlbanianTotalParser } from './implementations/albanian/albanian-total.parser';
import { DateTimeParser } from '../../utils/date-time-parser.util';

@Injectable()
export class AlbanianReceiptParser extends BaseReceiptParser {
  readonly name = 'albanian';

  constructor(
    private readonly storeNameParser: AlbanianStoreNameParser,
    private readonly storeLocationParser: AlbanianStoreLocationParser,
    private readonly dateParser: AlbanianDateParser,
    private readonly timeParser: AlbanianTimeParser,
    private readonly itemsParser: AlbanianItemsParser,
    private readonly totalParser: AlbanianTotalParser,
  ) {
    super();
  }

  canParse(text: string): boolean {
    const albanianMarkers = ['TVSH', 'TUSH', 'ARTIKUT', 'TOTALI NE EURO'];
    return albanianMarkers.some((marker) => text.includes(marker));
  }

  async parse(
    text: string,
    context: ReceiptParsingContext,
  ): Promise<ReceiptParsingResult> {
    const lines = this.getCleanLines(text);
    const date = this.dateParser.extractDate(lines);
    const time = this.timeParser.extractTime(lines);

    return {
      storeName: this.storeNameParser.extractStoreName(lines),
      storeLocation: this.storeLocationParser.extractStoreLocation(lines),
      date,
      time,
      recordedAt: DateTimeParser.parseAlbanianDateTime(date, time),
      items: this.itemsParser.extractItems(lines),
      totalAmount: this.totalParser.extractTotal(text),
      parserUsed: this.name,
    };
  }

  private getCleanLines(text: string): string[] {
    return text.split('\n').map((line) => line.trim());
  }
}
