import { ApiProperty } from '@nestjs/swagger';
export class AddSubtractionDTO {
  @ApiProperty()
  login: string;

  @ApiProperty()
  taskName: string;

  @ApiProperty()
  value: number;
}
