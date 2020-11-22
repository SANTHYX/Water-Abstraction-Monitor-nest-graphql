import { IsNotEmpty, IsNumber } from 'class-validator';

export class EurostatResponse {
  currentAvgSubtractionPerCapita: number;
  year?: number;
}
