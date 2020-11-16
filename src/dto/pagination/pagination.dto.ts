import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDTO {
  @IsOptional()
  @IsPositive()
  from: number;

  @IsOptional()
  @IsPositive()
  to: number;
}
