import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { type IIncomeCategoryRepository } from '../../domain/repositories/income-category.repository.interface';

@Injectable()
export class DeleteIncomeCategoryUseCase {
  constructor(
    @Inject('IncomeCategoryRepository')
    private readonly incomeCategoryRepository: IIncomeCategoryRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const category = await this.incomeCategoryRepository.findById(id);

    if (!category) {
      throw new NotFoundException('Income category not found');
    }

    await this.validate(id);

    await this.incomeCategoryRepository.delete(id);
  }

  private async validate(id: string): Promise<void> {
    const children = await this.incomeCategoryRepository.findChildren(id);
    if (children.length > 0) {
      throw new BadRequestException(
        'Cannot delete category with child categories',
      );
    }
  }
}
