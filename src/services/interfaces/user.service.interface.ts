import { PaginationDTO } from 'src/dto/pagination/pagination.dto';
import { CreateUserDTO } from 'src/dto/users/create.user.dto';
import { DeleteUserDTO } from 'src/dto/users/delete.user.dto';
import { UpdateUserDTO } from 'src/dto/users/update.user.dto';
import { User } from 'src/models/entities/user.model';

export interface IUserService {
  FindUserAsync(login: string): Promise<User>;
  BrowseAsync(pagination: PaginationDTO): Promise<User[]>;
  RegisterAsync(userDTO: CreateUserDTO): Promise<void>;
  UpdateAsync(userDTO: UpdateUserDTO): Promise<void>;
  DeleteAsync(userDTO: DeleteUserDTO): Promise<void>;
}
