import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import UserDB from './store/user.store';
// https://youtu.be/Rv9SinVHlPs?t=2203

@Injectable()
export class UsersService {
  constructor(private storage: UserDB) {}

  create(createUserDto: CreateUserDto) {
    // This action adds a new user
    return this.storage.create(createUserDto);
  }

  findAll() {
    // This action returns all users
    return this.storage.findAll();
  }

  findOne(id: string) {
    return this.storage.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.storage.update(id, updateUserDto);
  }

  delete(id: string) {
    return this.storage.delete(id);
  }
}
