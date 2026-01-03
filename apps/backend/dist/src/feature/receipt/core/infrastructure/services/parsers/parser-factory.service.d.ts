import { ConfigService } from '@nestjs/config';
import { IReceiptParser, IReceiptParserService, ReceiptParsingContext, ReceiptParsingResult } from '../../../application/services/receipt-parser.service';
import { AlbanianReceiptParser } from './albanian-receipt.parser';
import { GenericReceiptParser } from './generic-receipt.parser';
export declare class ReceiptParserFactory implements IReceiptParserService {
    private readonly configService;
    private readonly albanianParser;
    private readonly genericParser;
    private readonly logger;
    private parsers;
    constructor(configService: ConfigService, albanianParser: AlbanianReceiptParser, genericParser: GenericReceiptParser);
    private initializeParsers;
    parse(text: string, context: ReceiptParsingContext): Promise<ReceiptParsingResult>;
    registerParser(parser: IReceiptParser): void;
}
