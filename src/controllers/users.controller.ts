import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PaginationDTO } from 'src/dto/pagination/pagination.dto';
import { CreateUserDTO } from 'src/dto/users/create.user.dto';
import { DeleteUserDTO } from 'src/dto/users/delete.user.dto';
import { UpdateUserDTO } from 'src/dto/users/update.user.dto';
import { User } from 'src/models/entities/user.model';
import { UsersService } from 'src/services/users.service';
import { JwtAuthGuard } from 'src/strategy/jwt-auth';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':login')
  async GetUserAsync(@Param('login') login: string): Promise<User> {
    return await this.userService.FindUserAsync(login);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('')
  async GetAllUsersAsync(@Query() pagination: PaginationDTO): Promise<User[]> {
    return await this.userService.BrowseAsync(pagination);
  }

  @ApiBody({ type: CreateUserDTO })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async RegisterUserAsync(@Body() user: CreateUserDTO): Promise<void> {
    await this.userService.RegisterAsync(user);
  }

  @ApiBody({ type: UpdateUserDTO })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch()
  async UpdateUserAsync(@Body() user: UpdateUserDTO): Promise<void> {
    await this.userService.UpdateAsync(user);
  }

  @ApiBody({ type: DeleteUserDTO })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete()
  async RemoveUserAsync(@Body() user: DeleteUserDTO): Promise<void> {
    await this.userService.DeleteAsync(user);
  }
}
