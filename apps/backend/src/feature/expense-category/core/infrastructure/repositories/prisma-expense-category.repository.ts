import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../common/prisma/prisma.service';
import {
  IExpenseCategoryRepository,
  PaginatedResult,
} from '../../domain/repositories/expense-category.repository.interface';
import { ExpenseCategory } from '../../domain/entities/expense-category.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
import { ExpenseCategoryMapper } from '../mappers/expense-category.mapper';

@Injectable()
export class PrismaExpenseCategoryRepository implements IExpenseCategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<ExpenseCategory>): Promise<ExpenseCategory> {
    const category = await this.prisma.expenseCategory.create({
      data: {
        name: data.name!,
        parentId: data.parentId ?? null,
        isConnectedToStore: data.isConnectedToStore,
      },
    });

    return ExpenseCategoryMapper.toDomain(category);
  }

  async findById(id: string): Promise<ExpenseCategory | null> {
    const category = await this.prisma.expenseCategory.findUnique({
      where: { id },
    });

    return category ? ExpenseCategoryMapper.toDomain(category) : null;
  }

  async findByName(name: string): Promise<ExpenseCategory | null> {
    const category = await this.prisma.expenseCategory.findUnique({
      where: { name },
    });

    return category ? ExpenseCategoryMapper.toDomain(category) : null;
  }

  async findAll(
    pagination?: Pagination,
  ): Promise<PaginatedResult<ExpenseCategory>> {
    const [categories, total] = await Promise.all([
      this.prisma.expenseCategory.findMany({
        orderBy: { name: 'asc' },
        skip: pagination?.skip,
        take: pagination?.take,
      }),
      this.prisma.expenseCategory.count(),
    ]);

    return {
      data: categories.map(ExpenseCategoryMapper.toDomain),
      total,
    };
  }

  async findByParentId(
    parentId: string | null,
    pagination?: Pagination,
  ): Promise<PaginatedResult<ExpenseCategory>> {
    const [categories, total] = await Promise.all([
      this.prisma.expenseCategory.findMany({
        where: { parentId },
        orderBy: { name: 'asc' },
        skip: pagination?.skip,
        take: pagination?.take,
      }),
      this.prisma.expenseCategory.count({ where: { parentId } }),
    ]);

    return {
      data: categories.map(ExpenseCategoryMapper.toDomain),
      total,
    };
  }

  async findChildren(parentId: string): Promise<ExpenseCategory[]> {
    const categories = await this.prisma.expenseCategory.findMany({
      where: { parentId },
      orderBy: { name: 'asc' },
    });

    return categories.map(ExpenseCategoryMapper.toDomain);
  }

  async update(
    id: string,
    data: Partial<ExpenseCategory>,
  ): Promise<ExpenseCategory> {
    const updateData: any = {};

    if (data.name !== undefined) {
      updateData.name = data.name;
    }

    if (data.parentId !== undefined) {
      updateData.parentId = data.parentId;
    }

    const category = await this.prisma.expenseCategory.update({
      where: { id },
      data: updateData,
    });

    return ExpenseCategoryMapper.toDomain(category);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.expenseCategory.delete({
      where: { id },
    });
  }
}
