import { ITimeParser } from '../../interfaces/time-parser.interface';
export declare class GenericTimeParser implements ITimeParser {
    extractTime(lines: string[]): string | undefined;
}
