import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDTO } from 'src/dto/pagination/pagination.dto';
import { CreateUserDTO } from 'src/dto/users/create.user.dto';
import { DeleteUserDTO } from 'src/dto/users/delete.user.dto';
import { UpdateUserDTO } from 'src/dto/users/update.user.dto';
import { User } from 'src/models/user.model';
import { createQueryBuilder, Repository} from 'typeorm';
import { IUserService } from './interfaces/user.service.interface';

@Injectable()
export class UsersService implements IUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async FindUserAsync(login: string): Promise<User> {
    const user = await this.userRepository.findOne({ login: login });

    if (!user) {
      throw new NotFoundException(
        `Seems like user with login "${login}" dont exist, Are u sure you passed valid login?`,
      );
    } else return user;
  }

  async BrowseAsync(pagination: PaginationDTO): Promise<User[]> {
    const { from, to } = pagination;
    const query = createQueryBuilder(User, 'user');

    if (from || to) {
      query
        .skip(from)
        .take(to)
        .getMany();
    } else return await query.getMany();
  }

  async RegisterAsync(userDTO: CreateUserDTO): Promise<void> {
    await this.userRepository.save(userDTO);
  }

  async UpdateAsync(userDTO: UpdateUserDTO): Promise<void> {
    const user = await this.userRepository.preload({
      ...userDTO,
      updatedAt: new Date(),
    });
    await this.userRepository.save(user);
  }

  async DeleteAsync(userDTO: DeleteUserDTO): Promise<void> {
    await this.userRepository.delete(userDTO);
  }
}
