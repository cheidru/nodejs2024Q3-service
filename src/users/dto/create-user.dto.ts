import { IsAlphanumeric, IsInt, IsUUID, Length } from 'class-validator';

export class CreateUserDto {
  @Length(3)
  @IsAlphanumeric()
  login: string;
  @Length(3)
  password: string;
}
