import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetEurostatSubtraction {
  year?: number;
  nationality: string;
}
