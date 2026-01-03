import { Injectable } from '@nestjs/common';
import {
  ReceiptParsingContext,
  ReceiptParsingResult,
} from '../../../application/services/receipt-parser.service';
import { BaseReceiptParser } from './base-receipt.parser';
import { GenericStoreNameParser } from './implementations/generic/generic-store-name.parser';
import { GenericStoreLocationParser } from './implementations/generic/generic-store-location.parser';
import { GenericDateParser } from './implementations/generic/generic-date.parser';
import { GenericTimeParser } from './implementations/generic/generic-time.parser';
import { GenericItemsParser } from './implementations/generic/generic-items.parser';
import { GenericTotalParser } from './implementations/generic/generic-total.parser';
import { DateTimeParser } from '../../utils/date-time-parser.util';

@Injectable()
export class GenericReceiptParser extends BaseReceiptParser {
  readonly name = 'generic';

  constructor(
    private readonly storeNameParser: GenericStoreNameParser,
    private readonly storeLocationParser: GenericStoreLocationParser,
    private readonly dateParser: GenericDateParser,
    private readonly timeParser: GenericTimeParser,
    private readonly itemsParser: GenericItemsParser,
    private readonly totalParser: GenericTotalParser,
  ) {
    super();
  }

  canParse(text: string): boolean {
    return true;
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
      recordedAt: DateTimeParser.parseGenericDateTime(date, time),
      items: this.itemsParser.extractItems(lines),
      totalAmount: this.totalParser.extractTotal(text),
      parserUsed: this.name,
    };
  }

  private getCleanLines(text: string): string[] {
    return text
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }
}
