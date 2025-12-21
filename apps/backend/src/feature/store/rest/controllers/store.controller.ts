import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { StoreService } from '../../core/application/services/store.service';
import { StoreResponseDto } from '../dto/store-response.dto';
import { QueryStoreDto } from '../dto/query-store.dto';
import { Pagination } from '../../../transaction/core/application/dto/pagination.dto';
import { CreateStoreDto } from '~feature/store/core';

@Controller('stores')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  async create(@Body() query: CreateStoreDto) {
    const result = await this.storeService.createOrFind({
      name: query.name,
      location: query.location,
    });

    return StoreResponseDto.fromEntity(result);
  }

  @Get()
  async findAll(@Query() query: QueryStoreDto) {
    const pagination = new Pagination(query.page, query.limit);

    const result = await this.storeService.findAll(
      { search: query.search },
      pagination,
    );

    return {
      data: StoreResponseDto.fromEntities(result.data),
      total: result.total,
      page: pagination.page,
      limit: pagination.limit,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const store = await this.storeService.findById(id);
    return StoreResponseDto.fromEntity(store);
  }
}
