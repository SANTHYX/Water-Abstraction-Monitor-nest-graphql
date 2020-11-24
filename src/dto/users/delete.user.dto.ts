import { ApiProperty } from '@nestjs/swagger';
export class DeleteUserDTO {
  @ApiProperty()
  login: string;
}
