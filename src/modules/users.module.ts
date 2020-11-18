import { Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/users.controller';
import { UsersRepository } from 'src/repositories/users.repository';
import { UsersService } from 'src/services/users.service';

@Module({
  imports: [UsersRepository],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
