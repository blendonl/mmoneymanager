import { Injectable } from '@nestjs/common';
import { CreateOrFindStoreItemUseCase } from '../use-cases/create-or-find-store-item.use-case';
import { GetStoreItemByIdUseCase } from '../use-cases/get-store-item-by-id.use-case';
import { CreateStoreItemDto } from '../dto/create-store-item.dto';
import { StoreItem } from '../../domain/entities/store-item.entity';

@Injectable()
export class StoreItemService {
  constructor(
    private readonly createOrFindStoreItemUseCase: CreateOrFindStoreItemUseCase,
    private readonly getStoreItemByIdUseCase: GetStoreItemByIdUseCase,
  ) {}

  async createOrFind(dto: CreateStoreItemDto): Promise<StoreItem> {
    return this.createOrFindStoreItemUseCase.execute(dto);
  }

  async findById(id: string): Promise<StoreItem> {
    return this.getStoreItemByIdUseCase.execute(id);
  }
}
