import { IFamilyRepository } from '../../domain/repositories/family.repository.interface';
export declare class LeaveFamilyUseCase {
    private readonly familyRepository;
    constructor(familyRepository: IFamilyRepository);
    execute(familyId: string, userId: string): Promise<void>;
}
