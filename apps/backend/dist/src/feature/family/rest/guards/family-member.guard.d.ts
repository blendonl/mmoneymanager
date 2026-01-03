import { CanActivate, ExecutionContext } from '@nestjs/common';
import { IFamilyRepository } from '../../core/domain/repositories/family.repository.interface';
export declare class FamilyMemberGuard implements CanActivate {
    private readonly familyRepository;
    constructor(familyRepository: IFamilyRepository);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
