import { LogUserDTO } from 'src/dto/auth/log.user.dto';
import { AuthResponse } from 'src/models/responses/auth.response.model';

export interface IAuthService {
  LogUser(user: LogUserDTO): Promise<AuthResponse>;
}
