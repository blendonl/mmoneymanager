import { type IStoreRepository } from '../../domain/repositories/store.repository.interface';
import { CreateStoreDto } from '../dto/create-store.dto';
import { Store } from '../../domain/entities/store.entity';
export declare class CreateOrFindStoreUseCase {
    private readonly storeRepository;
    constructor(storeRepository: IStoreRepository);
    execute(dto: CreateStoreDto): Promise<Store>;
}
