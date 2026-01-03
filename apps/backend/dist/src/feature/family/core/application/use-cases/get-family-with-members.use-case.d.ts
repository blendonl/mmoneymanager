import { IFamilyRepository, FamilyWithMembersAndUsers } from '../../domain/repositories/family.repository.interface';
export declare class GetFamilyWithMembersUseCase {
    private readonly familyRepository;
    constructor(familyRepository: IFamilyRepository);
    execute(familyId: string, userId: string): Promise<FamilyWithMembersAndUsers>;
}
