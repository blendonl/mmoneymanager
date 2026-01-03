import { IItemsParser, ReceiptItem } from '../../interfaces/items-parser.interface';
export declare class GenericItemsParser implements IItemsParser {
    private readonly PRICE_PATTERN;
    private readonly QUANTITY_PATTERN;
    extractItems(lines: string[]): ReceiptItem[];
    private normalizePrice;
    private isLikelyNotItem;
}
