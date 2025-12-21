import { IsString, IsOptional, IsUUID } from 'class-validator';

export class UpdateExpenseItemCategoryRequestDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsUUID()
  @IsOptional()
  parentId?: string | null;
}
