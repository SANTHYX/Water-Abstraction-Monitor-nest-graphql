import { ApiProperty } from '@nestjs/swagger';
export class GenerateStatisticsDTO {
  @ApiProperty()
  login: string;

  @ApiProperty()
  avgSubtraction: number;
}
