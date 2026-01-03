import { IFamilyRepository } from '../../domain/repositories/family.repository.interface';
export declare class RemoveFamilyMemberUseCase {
    private readonly familyRepository;
    constructor(familyRepository: IFamilyRepository);
    execute(familyId: string, targetUserId: string, requestingUserId: string): Promise<void>;
}
