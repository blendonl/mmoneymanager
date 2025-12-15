import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../common/prisma/prisma.service';
import {
  IExpenseItemRepository,
  PaginatedResult,
} from '../../domain/repositories/expense-item.repository.interface';
import { ExpenseItem } from '../../domain/entities/expense-item.entity';
import { Pagination } from '../../../../transaction/core/application/dto/pagination.dto';
import { ExpenseItemMapper } from '../mappers/expense-item.mapper';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace';

@Injectable()
export class PrismaExpenseItemRepository implements IExpenseItemRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<ExpenseItem>): Promise<ExpenseItem> {
    const item = await this.prisma.expenseItem.create({
      data: {
        itemId: data.itemId!,
        expenseId: data.expenseId!,
        categoryId: data.categoryId!,
        price: new Decimal(data.price?.toString() || '0'),
        discount: new Decimal(data.discount?.toString() || '0'),
      },
      include: {
        item: true,
        expense: true,
        category: true,
      },
    });

    return ExpenseItemMapper.toDomain(item);
  }

  async findById(id: string): Promise<ExpenseItem | null> {
    const item = await this.prisma.expenseItem.findUnique({
      where: { id },
      include: {
        item: true,
        expense: true,
        category: true,
      },
    });

    return item ? ExpenseItemMapper.toDomain(item) : null;
  }

  async findByExpenseId(expenseId: string): Promise<ExpenseItem[]> {
    const items = await this.prisma.expenseItem.findMany({
      where: { expenseId },
      include: {
        item: true,
        expense: true,
        category: true,
      },
      orderBy: { createdAt: 'asc' },
    });

    return items.map(ExpenseItemMapper.toDomain);
  }

  async findAll(
    pagination?: Pagination,
  ): Promise<PaginatedResult<ExpenseItem>> {
    const [items, total] = await Promise.all([
      this.prisma.expenseItem.findMany({
        include: {
          item: true,
          expense: true,
          category: true,
        },
        orderBy: { createdAt: 'desc' },
        skip: pagination?.skip,
        take: pagination?.take,
      }),
      this.prisma.expenseItem.count(),
    ]);

    return {
      data: items.map(ExpenseItemMapper.toDomain),
      total,
    };
  }

  async update(id: string, data: Partial<ExpenseItem>): Promise<ExpenseItem> {
    const updateData: any = {};

    if (data.categoryId !== undefined) {
      updateData.categoryId = data.categoryId;
    }

    if (data.price !== undefined) {
      updateData.price = new Decimal(data.price.toString());
    }

    if (data.discount !== undefined) {
      updateData.discount = new Decimal(data.discount.toString());
    }

    const item = await this.prisma.expenseItem.update({
      where: { id },
      data: updateData,
      include: {
        item: true,
        expense: true,
        category: true,
      },
    });

    return ExpenseItemMapper.toDomain(item);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.expenseItem.delete({
      where: { id },
    });
  }

  async deleteByExpenseId(expenseId: string): Promise<void> {
    await this.prisma.expenseItem.deleteMany({
      where: { expenseId },
    });
  }

  async calculateExpenseTotal(expenseId: string): Promise<number> {
    const items = await this.prisma.expenseItem.findMany({
      where: { expenseId },
      select: {
        price: true,
        discount: true,
      },
    });

    const total = items.reduce((sum, item) => {
      const finalPrice = item.price.minus(item.discount);
      return sum + finalPrice.toNumber();
    }, 0);

    return total;
  }
}
