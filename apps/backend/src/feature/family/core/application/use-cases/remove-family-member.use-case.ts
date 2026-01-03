import {
  Injectable,
  Inject,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { IFamilyRepository } from '../../domain/repositories/family.repository.interface';

@Injectable()
export class RemoveFamilyMemberUseCase {
  constructor(
    @Inject('FamilyRepository')
    private readonly familyRepository: IFamilyRepository,
  ) {}

  async execute(
    familyId: string,
    targetUserId: string,
    requestingUserId: string,
  ): Promise<void> {
    // Validate requesting user is a member with permission
    const requestingMember = await this.familyRepository.findMember(
      familyId,
      requestingUserId,
    );

    if (!requestingMember) {
      throw new NotFoundException('You are not a member of this family');
    }

    if (!requestingMember.canManageMembers()) {
      throw new ForbiddenException(
        'Only owners and admins can remove family members',
      );
    }

    // Prevent removing yourself
    if (targetUserId === requestingUserId) {
      throw new BadRequestException(
        'You cannot remove yourself. Use the leave family endpoint instead.',
      );
    }

    // Validate target user is a member
    const targetMember = await this.familyRepository.findMember(
      familyId,
      targetUserId,
    );

    if (!targetMember) {
      throw new NotFoundException(
        `User with ID ${targetUserId} is not a member of this family`,
      );
    }

    // Prevent removing the owner
    if (targetMember.isOwner()) {
      throw new BadRequestException('The family owner cannot be removed');
    }

    // Remove the member
    await this.familyRepository.removeMember(familyId, targetUserId);

    // Recalculate family balance after member removal
    const newBalance =
      await this.familyRepository.calculateFamilyBalance(familyId);
    await this.familyRepository.updateFamilyBalance(familyId, newBalance);
  }
}
