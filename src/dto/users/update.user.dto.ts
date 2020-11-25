import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './create.user.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDTO {
  @ApiProperty()
  recentLogin: string;

  @ApiPropertyOptional()
  login: string;

  @ApiPropertyOptional()
  password: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  nationality: string;
}
