import { Body, Controller, Post } from '@nestjs/common';
import { LogUserDTO } from 'src/dto/auth/log.user.dto';
import { AuthResponse } from 'src/models/responses/auth.response.model';
import { AuthService } from 'src/services/auth.service';
import { ApiBody, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiUnauthorizedResponse({ status: 404, description: 'Invalid Credentials' })
  @ApiBody({ type: LogUserDTO })
  @Post()
  async Login(@Body() userDTO: LogUserDTO): Promise<AuthResponse> {
    return await this.authService.LogUser(userDTO);
  }
}
