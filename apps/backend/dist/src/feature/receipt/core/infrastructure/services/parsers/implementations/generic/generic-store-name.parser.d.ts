import { IStoreNameParser } from '../../interfaces/store-name-parser.interface';
export declare class GenericStoreNameParser implements IStoreNameParser {
    extractStoreName(lines: string[]): string;
}
