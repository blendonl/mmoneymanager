import { Store } from '../entities/store.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';

export interface PaginatedResult<T> {
  data: T[];
  total: number;
}

export interface IStoreRepository {
  create(data: Partial<Store>): Promise<Store>;
  findById(id: string): Promise<Store | null>;
  findByNameAndLocation(
    name: string,
    location: string,
  ): Promise<Store | null>;
  findAll(pagination?: Pagination): Promise<PaginatedResult<Store>>;
  update(id: string, data: Partial<Store>): Promise<Store>;
  delete(id: string): Promise<void>;
}
