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
  UseInterceptors,
} from '@nestjs/common';
import { PaginationDTO } from 'src/dto/pagination/pagination.dto';
import { CreateUserDTO } from 'src/dto/users/create.user.dto';
import { DeleteUserDTO } from 'src/dto/users/delete.user.dto';
import { UpdateUserDTO } from 'src/dto/users/update.user.dto';
import { User } from 'src/models/entities/user.model';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async GetUserAsync(@Param('id') id: string): Promise<User> {
    return await this.userService.FindUserAsync(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  async GetAllUsersAsync(@Query() pagination: PaginationDTO): Promise<User[]> {
    return await this.userService.BrowseAsync(pagination);
  }

  @Post()
  async RegisterUserAsync(@Body() user: CreateUserDTO): Promise<void> {
    await this.userService.RegisterAsync(user);
  }

  @Patch()
  async UpdateUserAsync(@Body() user: UpdateUserDTO): Promise<void> {
    await this.userService.UpdateAsync(user);
  }

  @Delete()
  async RemoveUserAsync(@Body() user: DeleteUserDTO): Promise<void> {
    await this.userService.DeleteAsync(user);
  }
}
