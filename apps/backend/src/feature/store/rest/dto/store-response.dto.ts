import { Store } from '../../core/domain/entities/store.entity';

export class StoreResponseDto {
    id: string;
    name: string;
    location: string;
    createdAt: Date;
    updatedAt: Date;

    static fromEntity(store: Store): StoreResponseDto {
        const dto = new StoreResponseDto();
        dto.id = store.id;
        dto.name = store.name;
        dto.location = store.location;
        dto.createdAt = store.createdAt;
        dto.updatedAt = store.updatedAt;
        return dto;
    }

    static fromEntities(stores: Store[]): StoreResponseDto[] {
        return stores.map((store) => this.fromEntity(store));
    }
}
