import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  IReceiptParser,
  IReceiptParserService,
  ReceiptParsingContext,
  ReceiptParsingResult,
} from '../../../application/services/receipt-parser.service';
import { AlbanianReceiptParser } from './albanian-receipt.parser';
import { GenericReceiptParser } from './generic-receipt.parser';

@Injectable()
export class ReceiptParserFactory implements IReceiptParserService {
  private readonly logger = new Logger(ReceiptParserFactory.name);
  private parsers: IReceiptParser[] = [];

  constructor(
    private readonly configService: ConfigService,
    private readonly albanianParser: AlbanianReceiptParser,
    private readonly genericParser: GenericReceiptParser,
  ) {
    this.initializeParsers();
  }

  private initializeParsers() {
    this.registerParser(this.albanianParser);
    this.registerParser(this.genericParser);

    this.logger.log(
      `Initialized ${this.parsers.length} parsers: ${this.parsers.map((p) => p.name).join(', ')}`,
    );
  }

  async parse(
    text: string,
    context: ReceiptParsingContext,
  ): Promise<ReceiptParsingResult> {
    for (const parser of this.parsers) {
      if (parser.canParse(text)) {
        this.logger.log(`Using parser: ${parser.name}`);
        return parser.parse(text, context);
      }
    }

    throw new Error('No suitable parser found for receipt');
  }

  registerParser(parser: IReceiptParser): void {
    this.parsers.push(parser);
  }
}
