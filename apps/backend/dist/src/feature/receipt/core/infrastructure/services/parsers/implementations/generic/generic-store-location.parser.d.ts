import { IStoreLocationParser } from '../../interfaces/store-location-parser.interface';
export declare class GenericStoreLocationParser implements IStoreLocationParser {
    extractStoreLocation(lines: string[]): string;
}
