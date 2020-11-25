import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsPositive()
  from: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsPositive()
  to: number;
}
