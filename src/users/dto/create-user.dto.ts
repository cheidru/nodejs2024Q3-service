import { IsAlphanumeric, IsInt, IsUUID, Length } from 'class-validator';

export class CreateUserDto {
  // @IsUUID()
  // id: string;
  @Length(3)
  @IsAlphanumeric()
  login: string;
  @Length(3)
  password: string;
  // @IsInt()
  // version: number; // integer number, increments on update
  // @IsInt()
  // createdAt: number; // timestamp of creation
  // @IsInt()
  // updatedAt: number; // timestamp of last update
}
