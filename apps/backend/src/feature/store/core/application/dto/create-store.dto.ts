import { IsString } from 'class-validator';

export class CreateStoreDto {
  @IsString()
  name: string;

  @IsString()
  location: string;

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
  }
}
