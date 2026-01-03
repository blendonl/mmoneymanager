import { Injectable, Inject } from '@nestjs/common';
import { type IStoreRepository } from '../../domain/repositories/store.repository.interface';
import { Store } from '../../domain/entities/store.entity';

@Injectable()
export class FindStoreBySimilarityUseCase {
  constructor(
    @Inject('StoreRepository')
    private readonly storeRepository: IStoreRepository,
  ) {}

  async execute(name: string): Promise<Store | null> {
    return this.storeRepository.findBySimilarName(name);
  }
}
