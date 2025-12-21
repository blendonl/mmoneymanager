import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { type IExpenseItemCategoryRepository } from '../../domain/repositories/expense-item-category.repository.interface';
import { CreateExpenseItemCategoryDto } from '../dto/create-expense-item-category.dto';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';

@Injectable()
export class CreateExpenseItemCategoryUseCase {
  constructor(
    @Inject('ExpenseItemCategoryRepository')
    private readonly expenseItemCategoryRepository: IExpenseItemCategoryRepository,
  ) {}

  async execute(dto: CreateExpenseItemCategoryDto): Promise<ExpenseItemCategory> {
    await this.validate(dto);

    const category = await this.expenseItemCategoryRepository.create({
      name: dto.name,
      parentId: dto.parentId ?? null,
    } as Partial<ExpenseItemCategory>);

    return category;
  }

  private async validate(dto: CreateExpenseItemCategoryDto): Promise<void> {
    if (!dto.name || dto.name.trim() === '') {
      throw new BadRequestException('Category name is required');
    }

    // Validate parent exists if provided
    if (dto.parentId) {
      const parent =
        await this.expenseItemCategoryRepository.findById(dto.parentId);
      if (!parent) {
        throw new BadRequestException('Parent category not found');
      }
    }
  }
}
