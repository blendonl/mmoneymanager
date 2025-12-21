import { IsString, IsOptional, IsUUID } from 'class-validator';

export class UpdateExpenseCategoryRequestDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsUUID()
  @IsOptional()
  parentId?: string | null;
}
