import { Injectable } from '@nestjs/common';
import { CreateOrFindStoreUseCase } from '../use-cases/create-or-find-store.use-case';
import { GetStoreByIdUseCase } from '../use-cases/get-store-by-id.use-case';
import { CreateStoreDto } from '../dto/create-store.dto';
import { Store } from '../../domain/entities/store.entity';

@Injectable()
export class StoreService {
  constructor(
    private readonly createOrFindStoreUseCase: CreateOrFindStoreUseCase,
    private readonly getStoreByIdUseCase: GetStoreByIdUseCase,
  ) {}

  async createOrFind(dto: CreateStoreDto): Promise<Store> {
    return this.createOrFindStoreUseCase.execute(dto);
  }

  async findById(id: string): Promise<Store> {
    return this.getStoreByIdUseCase.execute(id);
  }
}
