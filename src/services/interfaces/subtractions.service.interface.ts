import { GetEurostatSubtraction } from 'src/dto/subtractions/get.eurostat.subtraction';
import { EurostatResponse } from 'src/models/responses/eurostat.response.model';

export interface ISubtractionsService {
  FetchCurrentEurostatData(
    getDTO: GetEurostatSubtraction,
  ): Promise<EurostatResponse>;
  FetchAvalivableEurostatData(
    getDTO: GetEurostatSubtraction,
  ): Promise<EurostatResponse>;
}
