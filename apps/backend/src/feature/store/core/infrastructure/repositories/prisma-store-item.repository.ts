import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../common/prisma/prisma.service';
import {
  IStoreItemRepository,
  PaginatedResult,
} from '../../domain/repositories/store-item.repository.interface';
import { StoreItem } from '../../domain/entities/store-item.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
import { StoreItemMapper } from '../mappers/store-item.mapper';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace';

@Injectable()
export class PrismaStoreItemRepository implements IStoreItemRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<StoreItem>): Promise<StoreItem> {
    const item = await this.prisma.storeItem.create({
      data: {
        storeId: data.storeId!,
        itemId: data.itemId!,
        price: new Decimal(data.price?.toString() || '0'),
        isDiscounted: data.isDiscounted ?? false,
      },
      include: { item: true },
    });

    return StoreItemMapper.toDomain(item);
  }

  async findById(id: string): Promise<StoreItem | null> {
    const item = await this.prisma.storeItem.findUnique({
      where: { id },
      include: { item: true },
    });

    return item ? StoreItemMapper.toDomain(item) : null;
  }

  async findByStoreAndName(
    storeId: string,
    name: string,
  ): Promise<StoreItem | null> {
    const item = await this.prisma.storeItem.findFirst({
      where: {
        storeId,
        item: {
          name,
        },
      },
      orderBy: { createdAt: 'desc' }, // Get most recent if multiple
      include: { item: true },
    });

    return item ? StoreItemMapper.toDomain(item) : null;
  }

  async findByStoreAndItemId(
    storeId: string,
    itemId: string,
  ): Promise<StoreItem | null> {
    const item = await this.prisma.storeItem.findFirst({
      where: {
        storeId,
        itemId,
      },
      orderBy: { createdAt: 'desc' }, // Get most recent if multiple
      include: { item: true },
    });

    return item ? StoreItemMapper.toDomain(item) : null;
  }

  async findByStoreId(
    storeId: string,
    pagination?: Pagination,
  ): Promise<PaginatedResult<StoreItem>> {
    const [items, total] = await Promise.all([
      this.prisma.storeItem.findMany({
        where: { storeId },
        orderBy: { createdAt: 'desc' },
        skip: pagination?.skip,
        take: pagination?.take,
        include: { item: true },
      }),
      this.prisma.storeItem.count({ where: { storeId } }),
    ]);

    return {
      data: items.map(StoreItemMapper.toDomain),
      total,
    };
  }

  async findAll(pagination?: Pagination): Promise<PaginatedResult<StoreItem>> {
    const [items, total] = await Promise.all([
      this.prisma.storeItem.findMany({
        orderBy: { createdAt: 'desc' },
        skip: pagination?.skip,
        take: pagination?.take,
        include: { item: true },
      }),
      this.prisma.storeItem.count(),
    ]);

    return {
      data: items.map(StoreItemMapper.toDomain),
      total,
    };
  }

  async update(id: string, data: Partial<StoreItem>): Promise<StoreItem> {
    const updateData: any = {};

    if (data.price !== undefined) {
      updateData.price = new Decimal(data.price.toString());
    }

    if (data.isDiscounted !== undefined) {
      updateData.isDiscounted = data.isDiscounted;
    }

    const item = await this.prisma.storeItem.update({
      where: { id },
      data: updateData,
      include: { item: true },
    });

    return StoreItemMapper.toDomain(item);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.storeItem.delete({
      where: { id },
    });
  }
}
