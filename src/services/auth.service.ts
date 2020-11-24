import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { LogUserDTO } from 'src/dto/auth/log.user.dto';
import { AuthResponse } from 'src/models/responses/auth.response.model';
import { UsersRepository } from 'src/repositories/users.repository';
import { IAuthService } from './interfaces/auth.service.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UsersRepository,
  ) {}

  async LogUser(userDTO: LogUserDTO): Promise<AuthResponse> {
    const user = await this.userRepository.findOne({ login: userDTO.login });
    if (user && (await compare(userDTO.password, user.password))) {
      const payload = { login: user.login, id: user.id };
      const authResponse: AuthResponse = {
        token: await this.jwtService.signAsync(payload),
        createdAt: new Date(),
      };
      return authResponse;
    } else throw new UnauthorizedException(`Invalid Credentials`);
  }
}
