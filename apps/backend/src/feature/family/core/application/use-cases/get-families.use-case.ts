import { Injectable, Inject } from '@nestjs/common';
import { IFamilyRepository } from '../../domain/repositories/family.repository.interface';
import { Family } from '../../domain/entities/family.entity';

@Injectable()
export class GetFamiliesUseCase {
  constructor(
    @Inject('FamilyRepository')
    private readonly familyRepository: IFamilyRepository,
  ) {}

  async execute(userId: string): Promise<Family[]> {
    return this.familyRepository.findByUserId(userId);
  }
}
