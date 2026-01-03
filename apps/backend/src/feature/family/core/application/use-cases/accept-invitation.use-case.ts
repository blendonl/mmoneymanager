import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { IFamilyRepository } from '../../domain/repositories/family.repository.interface';
import { IFamilyInvitationRepository } from '../../domain/repositories/family-invitation.repository.interface';
import { FamilyMember, FamilyMemberRole } from '../../domain/entities/family-member.entity';
import { FamilyInvitationStatus } from '../../domain/entities/family-invitation.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AcceptInvitationUseCase {
  constructor(
    @Inject('FamilyRepository')
    private readonly familyRepository: IFamilyRepository,
    @Inject('FamilyInvitationRepository')
    private readonly invitationRepository: IFamilyInvitationRepository,
  ) {}

  async execute(invitationId: string, userId: string): Promise<FamilyMember> {
    // Find invitation
    const invitation = await this.invitationRepository.findById(invitationId);
    if (!invitation) {
      throw new NotFoundException('Invitation not found');
    }

    // Validate invitation
    if (!invitation.canBeAccepted()) {
      throw new BadRequestException(
        'Invitation expired or already processed',
      );
    }

    // Add user to family
    const member = await this.familyRepository.addMember({
      id: uuid(),
      familyId: invitation.familyId,
      userId: userId,
      role: FamilyMemberRole.MEMBER,
      balance: 0,
      joinedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Update invitation status
    await this.invitationRepository.update(invitation.id, {
      status: FamilyInvitationStatus.ACCEPTED,
      inviteeId: userId,
      id: invitation.id,
      familyId: invitation.familyId,
      inviterId: invitation.inviterId,
      inviteeEmail: invitation.inviteeEmail,
      expiresAt: invitation.expiresAt,
      createdAt: invitation.createdAt,
      updatedAt: new Date(),
    });

    return member;
  }
}
