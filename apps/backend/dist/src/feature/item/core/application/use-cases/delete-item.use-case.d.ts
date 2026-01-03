import { type IItemRepository } from '../../domain/repositories/item.repository.interface';
import { PrismaService } from '../../../../../common/prisma/prisma.service';
export declare class DeleteItemUseCase {
    private readonly itemRepository;
    private readonly prisma;
    constructor(itemRepository: IItemRepository, prisma: PrismaService);
    execute(id: string): Promise<void>;
}
