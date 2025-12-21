import { Controller, Get, Param, Query } from '@nestjs/common';
import { StoreItemService } from '../../core/application/services/store-item.service';
import { QueryStoreItemDto } from '../dto/query-store-item.dto';
import { StoreItemResponseDto } from '../dto/store-item-response.dto';
import { Pagination } from '../../../transaction/core/application/dto/pagination.dto';

@Controller('stores/:id/items')
export class StoreItemController {
  constructor(private readonly storeItemService: StoreItemService) {}

  @Get()
  async findAll(@Param('id') id: string, @Query() query: QueryStoreItemDto) {
    const pagination = new Pagination(query.page, query.limit);

    const result = await this.storeItemService.findAll(
      { storeId: id },
      pagination,
    );

    return {
      data: StoreItemResponseDto.fromEntities(result.data),
      total: result.total,
      page: pagination.page,
      limit: pagination.limit,
    };
  }
}
