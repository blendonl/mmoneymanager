import { IFamilyInvitationRepository } from '../../domain/repositories/family-invitation.repository.interface';
import { FamilyInvitation } from '../../domain/entities/family-invitation.entity';
export declare class GetPendingInvitationsUseCase {
    private readonly invitationRepository;
    constructor(invitationRepository: IFamilyInvitationRepository);
    execute(userEmail: string): Promise<FamilyInvitation[]>;
}
