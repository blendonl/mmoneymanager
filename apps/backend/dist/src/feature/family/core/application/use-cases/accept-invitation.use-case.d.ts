import { IFamilyRepository } from '../../domain/repositories/family.repository.interface';
import { IFamilyInvitationRepository } from '../../domain/repositories/family-invitation.repository.interface';
import { FamilyMember } from '../../domain/entities/family-member.entity';
export declare class AcceptInvitationUseCase {
    private readonly familyRepository;
    private readonly invitationRepository;
    constructor(familyRepository: IFamilyRepository, invitationRepository: IFamilyInvitationRepository);
    execute(invitationId: string, userId: string): Promise<FamilyMember>;
}
