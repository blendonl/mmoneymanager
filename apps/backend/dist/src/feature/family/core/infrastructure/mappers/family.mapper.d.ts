import { Family } from '../../domain/entities/family.entity';
import { Family as PrismaFamily } from 'prisma/generated/prisma/client';
export declare class FamilyMapper {
    static toDomain(prismaFamily: PrismaFamily): Family;
    static toPrisma(family: Family): any;
}
