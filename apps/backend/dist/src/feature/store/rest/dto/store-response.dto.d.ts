import { Store } from '../../core/domain/entities/store.entity';
export declare class StoreResponseDto {
    id: string;
    name: string;
    location: string;
    createdAt: Date;
    updatedAt: Date;
    static fromEntity(store: Store): StoreResponseDto;
    static fromEntities(stores: Store[]): StoreResponseDto[];
}
