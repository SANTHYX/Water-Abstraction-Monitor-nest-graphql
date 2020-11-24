import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { hash } from 'bcrypt';
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
      return await this.usersRepository.find({
        relations: ['statistics', 'subtractions'],
      });
  }

  async RegisterAsync(userDTO: CreateUserDTO): Promise<void> {
    if (!(await this.usersRepository.isExist(userDTO.login))) {
      const user = {
        login: userDTO.login,
        password: await hash(userDTO.password, 12),
        email: userDTO.email,
        nationality: userDTO.nationality,
        statistics: {
          avgSubtraction: 0,
        },
      };
      await this.usersRepository.save(user);
    } else
      throw new ConflictException(
        `Seems like user with username ${userDTO.login} already exist`,
      );
  }

  async UpdateAsync(userDTO: UpdateUserDTO): Promise<void> {
    if (!(await this.usersRepository.isExist(userDTO.login))) {
      const user = await this.usersRepository.findOne({
        login: userDTO.recentLogin,
      });
      const newUser = await this.usersRepository.preload({
        id: user.id,
        login: userDTO.login,
        password: await hash(userDTO.password, 12),
        email: userDTO.email,
        nationality: userDTO.nationality,
        statistics: {
          avgSubtraction: 0,
        },
      });

      await this.usersRepository.save(newUser);
    } else
      throw new NotFoundException(
        `Seems like user with username ${userDTO.login} dont exist`,
      );
  }

  async DeleteAsync(userDTO: DeleteUserDTO): Promise<void> {
    const _user = await this.usersRepository.find({ login: userDTO.login });
    await this.usersRepository.remove(_user);
  }
}
