import { type IStoreRepository } from '../../domain/repositories/store.repository.interface';
import { Store } from '../../domain/entities/store.entity';
export declare class FindStoreBySimilarityUseCase {
    private readonly storeRepository;
    constructor(storeRepository: IStoreRepository);
    execute(name: string): Promise<Store | null>;
}
