import { ITotalParser } from '../../interfaces/total-parser.interface';
export declare class AlbanianTotalParser implements ITotalParser {
    private readonly TOTAL_PATTERNS;
    extractTotal(text: string): number | undefined;
    private normalizePrice;
}
