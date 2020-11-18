import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';
import { IUsersRepository } from './interfaces/users.repository.interface';

export class UsersRepository extends Repository<User>
  implements IUsersRepository {
  async isExist(username: string): Promise<boolean> {
    return (await this.findOne({ login: username })) ? true : false;
  }

}
