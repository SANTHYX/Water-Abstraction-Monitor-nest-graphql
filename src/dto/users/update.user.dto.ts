import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './create.user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDTO extends PartialType(CreateUserDTO) {
  @ApiProperty()
  recentLogin: string;
}
