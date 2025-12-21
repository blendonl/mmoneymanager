import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateExpenseCategoryDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  parentId?: string | null;

  @IsBoolean()
  isConnectedToStore: boolean;

  constructor(
    name: string,
    isConnectedToStore: boolean,
    parentId?: string | null,
  ) {
    this.name = name;
    this.parentId = parentId;
    this.isConnectedToStore = isConnectedToStore;
  }
}
