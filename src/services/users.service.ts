import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationDTO } from 'src/dto/pagination/pagination.dto';
import { CreateUserDTO } from 'src/dto/users/create.user.dto';
import { DeleteUserDTO } from 'src/dto/users/delete.user.dto';
import { UpdateUserDTO } from 'src/dto/users/update.user.dto';
import { User } from 'src/models/entities/user.model';
import { UsersRepository } from 'src/repositories/users.repository';
import { IUserService } from './interfaces/user.service.interface';

@Injectable()
export class UsersService implements IUserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async FindUserAsync(login: string): Promise<User> {
    if (await this.usersRepository.isExist(login)) {
      return await this.usersRepository.findOneOrFail(
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
      return await this.usersRepository.find({
        relations: ['statistics', 'subtraction'],
        skip: from,
        take: to,
      });
    } else
      return await this.usersRepository.find({ relations: ['statistics','subtractions'] });
  }

  async RegisterAsync(user: CreateUserDTO): Promise<void> {
    await this.usersRepository.save(user);
  }

  async UpdateAsync(user: UpdateUserDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async DeleteAsync(user: DeleteUserDTO): Promise<void> {
    const _user = await this.usersRepository.find({ login: user.login });
    await this.usersRepository.remove(_user);
  }
}
