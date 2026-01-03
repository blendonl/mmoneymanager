export interface ReceiptParsingContext {
    userId?: string;
    confidence: number;
    rawText: string;
}
export interface ReceiptParsingResult {
    storeName: string;
    storeLocation: string;
    items: Array<{
        name: string;
        price: number;
        quantity: number;
    }>;
    totalAmount?: number;
    date?: string;
    time?: string;
    recordedAt?: Date;
    taxAmount?: number;
    parserUsed: string;
}
export interface IReceiptParser {
    readonly name: string;
    canParse(text: string): boolean;
    parse(text: string, context: ReceiptParsingContext): Promise<ReceiptParsingResult>;
}
export interface IReceiptParserService {
    parse(text: string, context: ReceiptParsingContext): Promise<ReceiptParsingResult>;
    registerParser(parser: IReceiptParser): void;
}
