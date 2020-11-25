import { GetCurrentEurostatData } from 'src/dto/eurostat/get.current.eurostat.data';
import { GetAnyEurostatData } from 'src/dto/eurostat/get.eurostat.subtraction';
import { EurostatResponse } from 'src/models/responses/eurostat.response.model';

export interface IEurostatService {
  FetchCurrentEurostatData(
    getDTO: GetCurrentEurostatData,
  ): Promise<EurostatResponse>;
  FetchAnyEurostatData(getDTO: GetAnyEurostatData): Promise<EurostatResponse>;
}
