import { User } from 'src/models/entities/user.model';
import { EntityRepository, Repository } from 'typeorm';
import { IUsersRepository } from './interfaces/users.repository.interface';
@EntityRepository(User)
export class UsersRepository extends Repository<User>
  implements IUsersRepository {
  async isExist(username: string): Promise<boolean> {
    return (await this.findOne({ login: username })) ? true : false;
  }
}
