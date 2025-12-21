import { Injectable, Inject } from '@nestjs/common';
import { type IExpenseItemCategoryRepository } from '../../domain/repositories/expense-item-category.repository.interface';
import { ExpenseItemCategory } from '../../domain/entities/expense-item-category.entity';

export interface ItemCategoryTree {
  category: ExpenseItemCategory;
  children: ItemCategoryTree[];
}

@Injectable()
export class GetItemCategoryTreeUseCase {
  constructor(
    @Inject('ExpenseItemCategoryRepository')
    private readonly expenseItemCategoryRepository: IExpenseItemCategoryRepository,
  ) {}

  async execute(): Promise<ItemCategoryTree[]> {
    // Get all root categories (parentId === null)
    const rootCategories = await this.expenseItemCategoryRepository.findByParentId(
      null,
    );

    // Build tree for each root category
    const trees = await Promise.all(
      rootCategories.data.map((category) => this.buildTree(category)),
    );

    return trees;
  }

  private async buildTree(category: ExpenseItemCategory): Promise<ItemCategoryTree> {
    const children =
      await this.expenseItemCategoryRepository.findChildren(category.id);

    const childTrees = await Promise.all(
      children.map((child) => this.buildTree(child)),
    );

    return {
      category,
      children: childTrees,
    };
  }
}
