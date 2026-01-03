import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { IFamilyInvitationRepository } from '../../domain/repositories/family-invitation.repository.interface';
import { FamilyInvitationStatus } from '../../domain/entities/family-invitation.entity';

@Injectable()
export class DeclineInvitationUseCase {
  constructor(
    @Inject('FamilyInvitationRepository')
    private readonly invitationRepository: IFamilyInvitationRepository,
  ) {}

  async execute(invitationId: string, userId: string): Promise<void> {
    const invitation = await this.invitationRepository.findById(invitationId);
    if (!invitation) {
      throw new NotFoundException('Invitation not found');
    }

    if (!invitation.canBeDeclined()) {
      throw new BadRequestException(
        'Invitation expired or already processed',
      );
    }

    await this.invitationRepository.update(invitation.id, {
      status: FamilyInvitationStatus.REJECTED,
      id: invitation.id,
      familyId: invitation.familyId,
      inviterId: invitation.inviterId,
      inviteeId: invitation.inviteeId,
      inviteeEmail: invitation.inviteeEmail,
      expiresAt: invitation.expiresAt,
      createdAt: invitation.createdAt,
      updatedAt: new Date(),
    });
  }
}
