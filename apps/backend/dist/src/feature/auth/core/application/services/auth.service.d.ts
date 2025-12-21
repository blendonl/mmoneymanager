import { PrismaService } from '../../../../../common/prisma/prisma.service';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { AuthResultDto } from '../dto/auth-result.dto';
import { User } from '../../../../user/core/domain/entities/user.entity';
export declare class AuthService {
    private readonly prisma;
    private betterAuth;
    constructor(prisma: PrismaService);
    register(dto: RegisterDto): Promise<AuthResultDto>;
    login(dto: LoginDto): Promise<AuthResultDto>;
    validateSession(token: string): Promise<User>;
    logout(token: string): Promise<void>;
    private validateRegisterDto;
}
