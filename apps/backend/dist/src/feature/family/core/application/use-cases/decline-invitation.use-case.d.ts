import { IFamilyInvitationRepository } from '../../domain/repositories/family-invitation.repository.interface';
export declare class DeclineInvitationUseCase {
    private readonly invitationRepository;
    constructor(invitationRepository: IFamilyInvitationRepository);
    execute(invitationId: string, userId: string): Promise<void>;
}
