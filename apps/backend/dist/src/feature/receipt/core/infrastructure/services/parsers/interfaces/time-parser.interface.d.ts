export interface ITimeParser {
    extractTime(lines: string[]): string | undefined;
}
