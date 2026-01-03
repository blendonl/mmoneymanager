import {
  FamilyMember,
  FamilyMemberRole,
} from '../../domain/entities/family-member.entity';
import {
  FamilyMember as PrismaFamilyMember,
  FamilyMemberRole as PrismaFamilyMemberRole,
} from 'prisma/generated/prisma/client';

export class FamilyMemberMapper {
  static toDomain(prismaMember: PrismaFamilyMember): FamilyMember {
    return new FamilyMember({
      id: prismaMember.id,
      familyId: prismaMember.familyId,
      userId: prismaMember.userId,
      role: this.mapRoleToDomain(prismaMember.role),
      balance: prismaMember.balance.toNumber(),
      joinedAt: prismaMember.joinedAt,
      createdAt: prismaMember.createdAt,
      updatedAt: prismaMember.updatedAt,
    });
  }

  static toPrisma(member: FamilyMember): any {
    return {
      id: member.id,
      familyId: member.familyId,
      userId: member.userId,
      role: this.mapRoleToPrisma(member.role),
      balance: member.balance,
      joinedAt: member.joinedAt,
    };
  }

  private static mapRoleToDomain(
    prismaRole: PrismaFamilyMemberRole,
  ): FamilyMemberRole {
    const roleMap: Record<PrismaFamilyMemberRole, FamilyMemberRole> = {
      OWNER: FamilyMemberRole.OWNER,
      ADMIN: FamilyMemberRole.ADMIN,
      MEMBER: FamilyMemberRole.MEMBER,
    };
    return roleMap[prismaRole];
  }

  private static mapRoleToPrisma(
    role: FamilyMemberRole,
  ): PrismaFamilyMemberRole {
    const roleMap: Record<FamilyMemberRole, PrismaFamilyMemberRole> = {
      [FamilyMemberRole.OWNER]: 'OWNER',
      [FamilyMemberRole.ADMIN]: 'ADMIN',
      [FamilyMemberRole.MEMBER]: 'MEMBER',
    };
    return roleMap[role];
  }
}
