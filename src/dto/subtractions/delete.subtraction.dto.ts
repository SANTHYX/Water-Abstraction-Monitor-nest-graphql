import { ApiProperty } from '@nestjs/swagger';
export class DeleteSubtractionsDTO {
  @ApiProperty()
  taskId: string;

  @ApiProperty()
  login: string;
}
