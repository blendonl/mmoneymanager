import { IDateParser } from '../../interfaces/date-parser.interface';
export declare class GenericDateParser implements IDateParser {
    private readonly DATE_PATTERNS;
    extractDate(lines: string[]): string | undefined;
}
