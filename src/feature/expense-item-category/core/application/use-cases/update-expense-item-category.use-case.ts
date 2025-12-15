import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { type IExpenseItemCategoryRepository } from '../../domain/repositories/expense-item-category.repository.interface';
import { UpdateExpenseItemCategoryDto } from '../dto/update-expense-item-category.dto';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';

@Injectable()
export class UpdateExpenseItemCategoryUseCase {
  constructor(
    @Inject('ExpenseItemCategoryRepository')
    private readonly expenseItemCategoryRepository: IExpenseItemCategoryRepository,
  ) {}

  async execute(
    id: string,
    dto: UpdateExpenseItemCategoryDto,
  ): Promise<ExpenseItemCategory> {
    const category = await this.expenseItemCategoryRepository.findById(id);

    if (!category) {
      throw new NotFoundException('Expense item category not found');
    }

    await this.validate(id, dto);

    const updated = await this.expenseItemCategoryRepository.update(id, {
      name: dto.name,
      parentId: dto.parentId,
    } as Partial<ExpenseItemCategory>);

    return updated;
  }

  private async validate(
    id: string,
    dto: UpdateExpenseItemCategoryDto,
  ): Promise<void> {
    // Validate parent exists and prevent circular reference
    if (dto.parentId !== undefined) {
      if (dto.parentId === id) {
        throw new BadRequestException('Category cannot be its own parent');
      }

      if (dto.parentId !== null) {
        const parent =
          await this.expenseItemCategoryRepository.findById(dto.parentId);
        if (!parent) {
          throw new BadRequestException('Parent category not found');
        }

        // Check if new parent is a descendant of current category
        await this.checkCircularReference(id, dto.parentId);
      }
    }
  }

  private async checkCircularReference(
    categoryId: string,
    newParentId: string,
  ): Promise<void> {
    let currentId: string | null = newParentId;

    while (currentId !== null) {
      if (currentId === categoryId) {
        throw new BadRequestException('Circular reference detected');
      }

      const current = await this.expenseItemCategoryRepository.findById(currentId);
      if (!current) {
        break;
      }
      currentId = current.parentId;
    }
  }
}
