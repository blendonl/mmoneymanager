import { IReceiptParser, ReceiptParsingContext, ReceiptParsingResult } from '../../../application/services/receipt-parser.service';
export declare abstract class BaseReceiptParser implements IReceiptParser {
    abstract readonly name: string;
    abstract canParse(text: string): boolean;
    abstract parse(text: string, context: ReceiptParsingContext): Promise<ReceiptParsingResult>;
    protected extractPrices(text: string): number[];
    protected normalizePrice(priceStr: string): number;
    protected detectCurrency(text: string): string;
    protected extractStoreName(text: string): string;
    protected extractDate(text: string): Date | undefined;
    protected extractTotal(text: string): number | undefined;
}
