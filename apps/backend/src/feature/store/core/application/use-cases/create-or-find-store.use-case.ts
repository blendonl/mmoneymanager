import { Injectable, Inject } from '@nestjs/common';
import { type IStoreRepository } from '../../domain/repositories/store.repository.interface';
import { CreateStoreDto } from '../dto/create-store.dto';
import { Store } from '../../domain/entities/store.entity';

@Injectable()
export class CreateOrFindStoreUseCase {
  constructor(
    @Inject('StoreRepository')
    private readonly storeRepository: IStoreRepository,
  ) {}

  async execute(dto: CreateStoreDto): Promise<Store> {
    const existingStore = await this.storeRepository.findByNameAndLocation(
      dto.name,
      dto.location,
    );

    if (existingStore) {
      return existingStore;
    }

    const store = await this.storeRepository.create({
      name: dto.name,
      location: dto.location,
    } as Partial<Store>);

    return store;
  }
}
