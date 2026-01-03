export interface IDateParser {
  extractDate(lines: string[]): string | undefined;
}
