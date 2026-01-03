import { FamilyMember } from '../../domain/entities/family-member.entity';
import { FamilyMember as PrismaFamilyMember } from 'prisma/generated/prisma/client';
export declare class FamilyMemberMapper {
    static toDomain(prismaMember: PrismaFamilyMember): FamilyMember;
    static toPrisma(member: FamilyMember): any;
    private static mapRoleToDomain;
    private static mapRoleToPrisma;
}
