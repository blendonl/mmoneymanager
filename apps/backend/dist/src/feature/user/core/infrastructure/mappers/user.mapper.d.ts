import { User as PrismaUser } from 'prisma/generated/prisma/client';
import { User } from '../../domain/entities/user.entity';
export declare class UserMapper {
    static toDomain(prismaUser: PrismaUser): User;
}
