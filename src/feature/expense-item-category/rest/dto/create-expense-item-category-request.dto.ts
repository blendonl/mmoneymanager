import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';

export class CreateExpenseItemCategoryRequestDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsUUID()
  @IsOptional()
  parentId?: string;
}
