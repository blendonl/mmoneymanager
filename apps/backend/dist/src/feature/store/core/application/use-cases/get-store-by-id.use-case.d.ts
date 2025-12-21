import { type IStoreRepository } from '../../domain/repositories/store.repository.interface';
import { Store } from '../../domain/entities/store.entity';
export declare class GetStoreByIdUseCase {
    private readonly storeRepository;
    constructor(storeRepository: IStoreRepository);
    execute(id: string): Promise<Store>;
}
