import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

export interface UserStore {
  findOne: (id: string) => UserEntity | undefined;
  findAll: () => UserEntity[];
  create: (params: CreateUserDto) => UserEntity;
  update: (id: string, params: UpdateUserDto) => UserEntity;
  delete: (id: string) => void;
}
