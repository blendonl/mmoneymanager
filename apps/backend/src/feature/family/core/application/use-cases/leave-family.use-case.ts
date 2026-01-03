import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { IFamilyRepository } from '../../domain/repositories/family.repository.interface';

@Injectable()
export class LeaveFamilyUseCase {
  constructor(
    @Inject('FamilyRepository')
    private readonly familyRepository: IFamilyRepository,
  ) {}

  async execute(familyId: string, userId: string): Promise<void> {
    const member = await this.familyRepository.findMember(familyId, userId);
    if (!member) {
      throw new NotFoundException('Not a family member');
    }

    // If owner, check if there are other members
    if (member.isOwner()) {
      const allMembers = await this.familyRepository.findMembers(familyId);
      if (allMembers.length > 1) {
        throw new BadRequestException(
          'Owner must transfer ownership or remove all members before leaving',
        );
      }
      // If owner is the only member, delete the family
      await this.familyRepository.delete(familyId);
      return;
    }

    // Remove member
    await this.familyRepository.removeMember(familyId, userId);
  }
}
