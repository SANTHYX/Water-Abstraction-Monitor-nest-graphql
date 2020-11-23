import { GetEurostatSubtraction } from 'src/dto/eurostat/get.eurostat.subtraction';
import { EurostatResponse } from 'src/models/responses/eurostat.response.model';

export interface IEurostatService {
  FetchCurrentEurostatData(
    getDTO: GetEurostatSubtraction,
  ): Promise<EurostatResponse>;
  FetchAnyEurostatData(
    getDTO: GetEurostatSubtraction,
  ): Promise<EurostatResponse>;
}
