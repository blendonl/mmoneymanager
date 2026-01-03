import { Item } from '../entities/item.entity';
import { Pagination, PaginatedResult } from '~common/types/pagination';
export { PaginatedResult };
export interface IItemRepository {
    create(data: Partial<Item>): Promise<Item>;
    findById(id: string): Promise<Item | null>;
    findByName(name: string): Promise<Item | null>;
    findByNameAndCategory(name: string, categoryId: string): Promise<Item | null>;
    findByCategoryId(categoryId: string, pagination?: Pagination): Promise<PaginatedResult<Item>>;
    findAll(pagination?: Pagination): Promise<PaginatedResult<Item>>;
    update(id: string, data: Partial<Item>): Promise<Item>;
    delete(id: string): Promise<void>;
}
