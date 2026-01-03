import { ReceiptParsingContext, ReceiptParsingResult } from '../../../application/services/receipt-parser.service';
import { BaseReceiptParser } from './base-receipt.parser';
import { GenericStoreNameParser } from './implementations/generic/generic-store-name.parser';
import { GenericStoreLocationParser } from './implementations/generic/generic-store-location.parser';
import { GenericDateParser } from './implementations/generic/generic-date.parser';
import { GenericTimeParser } from './implementations/generic/generic-time.parser';
import { GenericItemsParser } from './implementations/generic/generic-items.parser';
import { GenericTotalParser } from './implementations/generic/generic-total.parser';
export declare class GenericReceiptParser extends BaseReceiptParser {
    private readonly storeNameParser;
    private readonly storeLocationParser;
    private readonly dateParser;
    private readonly timeParser;
    private readonly itemsParser;
    private readonly totalParser;
    readonly name = "generic";
    constructor(storeNameParser: GenericStoreNameParser, storeLocationParser: GenericStoreLocationParser, dateParser: GenericDateParser, timeParser: GenericTimeParser, itemsParser: GenericItemsParser, totalParser: GenericTotalParser);
    canParse(text: string): boolean;
    parse(text: string, context: ReceiptParsingContext): Promise<ReceiptParsingResult>;
    private getCleanLines;
}
