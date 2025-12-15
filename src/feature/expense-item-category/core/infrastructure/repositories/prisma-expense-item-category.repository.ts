import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../common/prisma/prisma.service';
import {
  IExpenseItemCategoryRepository,
  PaginatedResult,
} from '../../domain/repositories/expense-item-category.repository.interface';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
import { ExpenseItemCategoryMapper } from '../mappers/expense-item-category.mapper';

@Injectable()
export class PrismaExpenseItemCategoryRepository
  implements IExpenseItemCategoryRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<ExpenseItemCategory>): Promise<ExpenseItemCategory> {
    const category = await this.prisma.expenseItemCategory.create({
      data: {
        name: data.name!,
        parentId: data.parentId ?? null,
      },
    });

    return ExpenseItemCategoryMapper.toDomain(category);
  }

  async findById(id: string): Promise<ExpenseItemCategory | null> {
    const category = await this.prisma.expenseItemCategory.findUnique({
      where: { id },
    });

    return category ? ExpenseItemCategoryMapper.toDomain(category) : null;
  }

  async findAll(
    pagination?: Pagination,
  ): Promise<PaginatedResult<ExpenseItemCategory>> {
    const [categories, total] = await Promise.all([
      this.prisma.expenseItemCategory.findMany({
        orderBy: { name: 'asc' },
        skip: pagination?.skip,
        take: pagination?.take,
      }),
      this.prisma.expenseItemCategory.count(),
    ]);

    return {
      data: categories.map(ExpenseItemCategoryMapper.toDomain),
      total,
    };
  }

  async findByParentId(
    parentId: string | null,
    pagination?: Pagination,
  ): Promise<PaginatedResult<ExpenseItemCategory>> {
    const [categories, total] = await Promise.all([
      this.prisma.expenseItemCategory.findMany({
        where: { parentId },
        orderBy: { name: 'asc' },
        skip: pagination?.skip,
        take: pagination?.take,
      }),
      this.prisma.expenseItemCategory.count({ where: { parentId } }),
    ]);

    return {
      data: categories.map(ExpenseItemCategoryMapper.toDomain),
      total,
    };
  }

  async findChildren(parentId: string): Promise<ExpenseItemCategory[]> {
    const categories = await this.prisma.expenseItemCategory.findMany({
      where: { parentId },
      orderBy: { name: 'asc' },
    });

    return categories.map(ExpenseItemCategoryMapper.toDomain);
  }

  async update(
    id: string,
    data: Partial<ExpenseItemCategory>,
  ): Promise<ExpenseItemCategory> {
    const updateData: any = {};

    if (data.name !== undefined) {
      updateData.name = data.name;
    }

    if (data.parentId !== undefined) {
      updateData.parentId = data.parentId;
    }

    const category = await this.prisma.expenseItemCategory.update({
      where: { id },
      data: updateData,
    });

    return ExpenseItemCategoryMapper.toDomain(category);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.expenseItemCategory.delete({
      where: { id },
    });
  }
}
