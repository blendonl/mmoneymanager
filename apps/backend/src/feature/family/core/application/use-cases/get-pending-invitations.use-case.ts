import { Injectable, Inject } from '@nestjs/common';
import { IFamilyInvitationRepository } from '../../domain/repositories/family-invitation.repository.interface';
import { FamilyInvitation } from '../../domain/entities/family-invitation.entity';

@Injectable()
export class GetPendingInvitationsUseCase {
  constructor(
    @Inject('FamilyInvitationRepository')
    private readonly invitationRepository: IFamilyInvitationRepository,
  ) {}

  async execute(userEmail: string): Promise<FamilyInvitation[]> {
    return this.invitationRepository.findByInviteeEmail(userEmail);
  }
}
