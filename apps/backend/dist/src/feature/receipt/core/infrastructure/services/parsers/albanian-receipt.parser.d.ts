import { ReceiptParsingContext, ReceiptParsingResult } from '../../../application/services/receipt-parser.service';
import { BaseReceiptParser } from './base-receipt.parser';
import { AlbanianStoreNameParser } from './implementations/albanian/albanian-store-name.parser';
import { AlbanianStoreLocationParser } from './implementations/albanian/albanian-store-location.parser';
import { AlbanianDateParser } from './implementations/albanian/albanian-date.parser';
import { AlbanianTimeParser } from './implementations/albanian/albanian-time.parser';
import { AlbanianItemsParser } from './implementations/albanian/albanian-items.parser';
import { AlbanianTotalParser } from './implementations/albanian/albanian-total.parser';
export declare class AlbanianReceiptParser extends BaseReceiptParser {
    private readonly storeNameParser;
    private readonly storeLocationParser;
    private readonly dateParser;
    private readonly timeParser;
    private readonly itemsParser;
    private readonly totalParser;
    readonly name = "albanian";
    constructor(storeNameParser: AlbanianStoreNameParser, storeLocationParser: AlbanianStoreLocationParser, dateParser: AlbanianDateParser, timeParser: AlbanianTimeParser, itemsParser: AlbanianItemsParser, totalParser: AlbanianTotalParser);
    canParse(text: string): boolean;
    parse(text: string, context: ReceiptParsingContext): Promise<ReceiptParsingResult>;
    private getCleanLines;
}
