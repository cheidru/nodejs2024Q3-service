import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import UserDB from './store/user.store';

@Module({
  controllers: [UsersController],
  providers: [UserDB, UsersService],
})
export class UsersModule {}
