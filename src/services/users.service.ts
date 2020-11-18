import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationDTO } from 'src/dto/pagination/pagination.dto';
import { CreateUserDTO } from 'src/dto/users/create.user.dto';
import { DeleteUserDTO } from 'src/dto/users/delete.user.dto';
import { UpdateUserDTO } from 'src/dto/users/update.user.dto';
import { User } from 'src/models/user.model';
import { UsersRepository } from 'src/repositories/users.repository';
import { IUserService } from './interfaces/user.service.interface';

@Injectable()
export class UsersService implements IUserService {
  constructor(private readonly userRepository: UsersRepository) {}
  async FindUserAsync(login: string): Promise<User> {
    if (await this.userRepository.isExist(login)) {
      return await this.userRepository.findOneOrFail(
        { login: login },
        { relations: ['statistics'] },
      );
    } else
      throw new NotFoundException(
        `Seems like user with username ${login} dont exist`,
      );
  }
  async BrowseAsync(pagination: PaginationDTO): Promise<User[]> {
    const { from, to } = pagination;
    if (from || to) {
      return await this.userRepository.find({
        relations: ['statistics'],
        skip: from,
        take: to,
      });
    } else return await this.userRepository.find({ relations: ['statistics'] });
  }
  async RegisterAsync(user: CreateUserDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async UpdateAsync(user: UpdateUserDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async DeleteAsync(user: DeleteUserDTO): Promise<void> {
    const _user = await this.userRepository.find({ login: user.login });
    await this.userRepository.remove(_user);
  }
}
