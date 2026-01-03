import { IsString, IsOptional, IsUUID } from 'class-validator';

export class UpdateItemRequestDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsUUID()
  @IsOptional()
  categoryId?: string;
}
