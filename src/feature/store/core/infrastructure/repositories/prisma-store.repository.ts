import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../common/prisma/prisma.service';
import {
  IStoreRepository,
  PaginatedResult,
} from '../../domain/repositories/store.repository.interface';
import { Store } from '../../domain/entities/store.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
import { StoreMapper } from '../mappers/store.mapper';

@Injectable()
export class PrismaStoreRepository implements IStoreRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<Store>): Promise<Store> {
    const store = await this.prisma.store.create({
      data: {
        name: data.name!,
        location: data.location!,
      },
    });

    return StoreMapper.toDomain(store);
  }

  async findById(id: string): Promise<Store | null> {
    const store = await this.prisma.store.findUnique({
      where: { id },
    });

    return store ? StoreMapper.toDomain(store) : null;
  }

  async findByNameAndLocation(
    name: string,
    location: string,
  ): Promise<Store | null> {
    const store = await this.prisma.store.findFirst({
      where: {
        name,
        location,
      },
    });

    return store ? StoreMapper.toDomain(store) : null;
  }

  async findAll(pagination?: Pagination): Promise<PaginatedResult<Store>> {
    const [stores, total] = await Promise.all([
      this.prisma.store.findMany({
        orderBy: { name: 'asc' },
        skip: pagination?.skip,
        take: pagination?.take,
      }),
      this.prisma.store.count(),
    ]);

    return {
      data: stores.map(StoreMapper.toDomain),
      total,
    };
  }

  async update(id: string, data: Partial<Store>): Promise<Store> {
    const updateData: any = {};

    if (data.name !== undefined) {
      updateData.name = data.name;
    }

    if (data.location !== undefined) {
      updateData.location = data.location;
    }

    const store = await this.prisma.store.update({
      where: { id },
      data: updateData,
    });

    return StoreMapper.toDomain(store);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.store.delete({
      where: { id },
    });
  }
}
