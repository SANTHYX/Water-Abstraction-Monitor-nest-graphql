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
import {
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiParam({ name: 'login' })
  @ApiBearerAuth()
  @ApiNotFoundResponse({
    status: 404,
    description: 'Seems like user with username ${login} dont exist`',
  })
  @ApiOkResponse({ status: 200 })
  @ApiUnauthorizedResponse({ status: 401, description: 'Unatuhorized' })
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get(':login')
  async GetUserAsync(@Param('login') login: string): Promise<User> {
    return await this.userService.FindUserAsync(login);
  }

  @ApiQuery({ type: PaginationDTO })
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('')
  async GetAllUsersAsync(@Query() pagination: PaginationDTO): Promise<User[]> {
    return await this.userService.BrowseAsync(pagination);
  }

  @ApiConflictResponse({
    status: 409,
    description: 'Seems like user with username ${userDTO.login} already exist',
  })
  @ApiBody({ type: CreateUserDTO })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async RegisterUserAsync(@Body() user: CreateUserDTO): Promise<void> {
    await this.userService.RegisterAsync(user);
  }

  @ApiNotFoundResponse({
    status: 404,
    description: 'Seems like user with username ${userDTO.login} dont exist',
  })
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
