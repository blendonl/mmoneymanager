import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { type IStoreRepository } from '../../domain/repositories/store.repository.interface';
import { Store } from '../../domain/entities/store.entity';

@Injectable()
export class GetStoreByIdUseCase {
  constructor(
    @Inject('StoreRepository')
    private readonly storeRepository: IStoreRepository,
  ) {}

  async execute(id: string): Promise<Store> {
    const store = await this.storeRepository.findById(id);

    if (!store) {
      throw new NotFoundException('Store not found');
    }

    return store;
  }
}
