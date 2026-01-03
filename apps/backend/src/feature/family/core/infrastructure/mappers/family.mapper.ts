import { Family } from '../../domain/entities/family.entity';
import { Family as PrismaFamily } from 'prisma/generated/prisma/client';

export class FamilyMapper {
  static toDomain(prismaFamily: PrismaFamily): Family {
    return new Family({
      id: prismaFamily.id,
      name: prismaFamily.name,
      balance: prismaFamily.balance.toNumber(),
      createdAt: prismaFamily.createdAt,
      updatedAt: prismaFamily.updatedAt,
    });
  }

  static toPrisma(family: Family): any {
    return {
      id: family.id,
      name: family.name,
      balance: family.balance,
    };
  }
}
