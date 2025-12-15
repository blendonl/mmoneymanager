import { Injectable, Inject, BadRequestException } from '@nestjs/common';
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
    this.validate(dto);

    // Try to find existing store by name and location
    const existingStore = await this.storeRepository.findByNameAndLocation(
      dto.name,
      dto.location,
    );

    if (existingStore) {
      return existingStore;
    }

    // Create new store if not found
    const store = await this.storeRepository.create({
      name: dto.name,
      location: dto.location,
    } as Partial<Store>);

    return store;
  }

  private validate(dto: CreateStoreDto): void {
    if (!dto.name || dto.name.trim() === '') {
      throw new BadRequestException('Store name is required');
    }

    if (!dto.location || dto.location.trim() === '') {
      throw new BadRequestException('Store location is required');
    }
  }
}
