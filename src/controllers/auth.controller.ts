import { Body, Controller, Get } from '@nestjs/common';
import { LogUserDTO } from 'src/dto/auth/log.user.dto';
import { AuthResponse } from 'src/models/responses/auth.response.model';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async Login(@Body() userDTO: LogUserDTO): Promise<AuthResponse> {
    return await this.authService.LogUser(userDTO);
  }
}
