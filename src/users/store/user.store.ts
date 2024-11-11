import { v4 as uuidv4 } from 'uuid';
import { UserStore } from 'src/users/interfaces/user-storage.interface';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
class UserDB implements UserStore {
  private users: UserEntity[] = [
    {
      id: '123',
      login: 'test',
      password: '123test',
      version: 0, // integer number, increments on update
      createdAt: 1731317616979, // timestamp of creation
      updatedAt: 1731317616979, // timestamp of last update
    },
  ];

  findOne = (id: string): UserEntity | undefined => {
    return this.users.find((user) => user.id === id);
  };

  findAll = (): UserEntity[] => {
    return this.users;
  };

  create = (params: CreateUserDto): UserEntity => {
    const newUser = {
      ...params,
      id: uuidv4(),
      version: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    } as UserEntity;
    this.users.push(newUser);
    return newUser;
  };

  update = (UpdateUserDto: UpdateUserDto): UserEntity => {
    this.users = this.users.map((user) => {
      if (user.id === UpdateUserDto.id) return Object.assign(UpdateUserDto);
      return this.users;
    });
    return this.findOne(UpdateUserDto.id);
  };

  delete = (id: string): void => {
    this.users = this.users.filter((user) => user.id !== id);
  };
}

export default UserDB;
