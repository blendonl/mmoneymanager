import { IDateParser } from '../../interfaces/date-parser.interface';
export declare class AlbanianDateParser implements IDateParser {
    private readonly DATE_REGEX;
    extractDate(lines: string[]): string | undefined;
    private findDateLine;
}
