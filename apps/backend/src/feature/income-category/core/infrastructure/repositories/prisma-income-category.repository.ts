import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../common/prisma/prisma.service';
import {
  IIncomeCategoryRepository,
  PaginatedResult,
} from '../../domain/repositories/income-category.repository.interface';
import { IncomeCategory } from '../../domain/entities/income-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
import { IncomeCategoryMapper } from '../mappers/income-category.mapper';

@Injectable()
export class PrismaIncomeCategoryRepository
  implements IIncomeCategoryRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<IncomeCategory>): Promise<IncomeCategory> {
    const category = await this.prisma.incomeCategory.create({
      data: {
        name: data.name!,
        parentId: data.parentId ?? null,
      },
    });

    return IncomeCategoryMapper.toDomain(category);
  }

  async findById(id: string): Promise<IncomeCategory | null> {
    const category = await this.prisma.incomeCategory.findUnique({
      where: { id },
    });

    return category ? IncomeCategoryMapper.toDomain(category) : null;
  }

  async findAll(
    pagination?: Pagination,
  ): Promise<PaginatedResult<IncomeCategory>> {
    const [categories, total] = await Promise.all([
      this.prisma.incomeCategory.findMany({
        orderBy: { name: 'asc' },
        skip: pagination?.skip,
        take: pagination?.take,
      }),
      this.prisma.incomeCategory.count(),
    ]);

    return {
      data: categories.map(IncomeCategoryMapper.toDomain),
      total,
    };
  }

  async findByParentId(
    parentId: string | null,
    pagination?: Pagination,
  ): Promise<PaginatedResult<IncomeCategory>> {
    const [categories, total] = await Promise.all([
      this.prisma.incomeCategory.findMany({
        where: { parentId },
        orderBy: { name: 'asc' },
        skip: pagination?.skip,
        take: pagination?.take,
      }),
      this.prisma.incomeCategory.count({ where: { parentId } }),
    ]);

    return {
      data: categories.map(IncomeCategoryMapper.toDomain),
      total,
    };
  }

  async findChildren(parentId: string): Promise<IncomeCategory[]> {
    const categories = await this.prisma.incomeCategory.findMany({
      where: { parentId },
      orderBy: { name: 'asc' },
    });

    return categories.map(IncomeCategoryMapper.toDomain);
  }

  async update(
    id: string,
    data: Partial<IncomeCategory>,
  ): Promise<IncomeCategory> {
    const updateData: any = {};

    if (data.name !== undefined) {
      updateData.name = data.name;
    }

    if (data.parentId !== undefined) {
      updateData.parentId = data.parentId;
    }

    const category = await this.prisma.incomeCategory.update({
      where: { id },
      data: updateData,
    });

    return IncomeCategoryMapper.toDomain(category);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.incomeCategory.delete({
      where: { id },
    });
  }
}
