import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { IStoreRepository, PaginatedResult } from '../../domain/repositories/store.repository.interface';
import { Store } from '../../domain/entities/store.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
export declare class PrismaStoreRepository implements IStoreRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Partial<Store>): Promise<Store>;
    findById(id: string): Promise<Store | null>;
    findByNameAndLocation(name: string, location: string): Promise<Store | null>;
    findBySimilarName(name: string): Promise<Store | null>;
    findAll(filters?: {
        search?: string;
    }, pagination?: Pagination): Promise<PaginatedResult<Store>>;
    update(id: string, data: Partial<Store>): Promise<Store>;
    delete(id: string): Promise<void>;
}
