import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  BadRequestException,
  Inject,
} from '@nestjs/common';
import { IFamilyRepository } from '../../core/domain/repositories/family.repository.interface';

@Injectable()
export class FamilyMemberGuard implements CanActivate {
  constructor(
    @Inject('FamilyRepository')
    private readonly familyRepository: IFamilyRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const familyId = request.params.id || request.params.familyId;

    if (!familyId) {
      throw new BadRequestException('Family ID required');
    }

    const member = await this.familyRepository.findMember(familyId, user.id);
    if (!member) {
      throw new ForbiddenException('Not a member of this family');
    }

    // Attach member to request for use in controllers
    request.familyMember = member;
    return true;
  }
}
