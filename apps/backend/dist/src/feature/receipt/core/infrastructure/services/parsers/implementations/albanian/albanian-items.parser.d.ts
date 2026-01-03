import { IItemsParser, ReceiptItem } from '../../interfaces/items-parser.interface';
export declare class AlbanianItemsParser implements IItemsParser {
    private readonly ITEM_REGEX;
    private readonly QUANTITY_REGEX;
    extractItems(lines: string[]): ReceiptItem[];
    private extractQuantityInfo;
    private parseItemLine;
}
