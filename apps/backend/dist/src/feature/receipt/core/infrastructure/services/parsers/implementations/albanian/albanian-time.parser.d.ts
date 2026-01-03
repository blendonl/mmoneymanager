import { ITimeParser } from '../../interfaces/time-parser.interface';
export declare class AlbanianTimeParser implements ITimeParser {
    private readonly DATE_REGEX;
    private readonly TIME_REGEX;
    extractTime(lines: string[]): string | undefined;
    private findDateLine;
}
