import { ApiProperty } from '@nestjs/swagger';

export class GetCurrentEurostatData {
  @ApiProperty()
  nationality: string;
}
