import { Injectable } from '@nestjs/common';
import { GetEurostatSubtraction } from 'src/dto/subtractions/get.eurostat.subtraction';
import { EurostatResponse } from 'src/models/responses/eurostat.response.model';
import { fetchCurrentData, fetchData } from 'src/plugins/axios';
import { SubtractionsRepository } from 'src/repositories/subtractions.repository';
import { ISubtractionsService } from './interfaces/subtractions.service.interface';

@Injectable()
export class SubtractionsService implements ISubtractionsService {
  constructor(
    private readonly subtractionsRepository: SubtractionsRepository,
  ) {}

  async FetchCurrentEurostatData(
    getDTO: GetEurostatSubtraction,
  ): Promise<EurostatResponse> {
    const data = await fetchCurrentData(getDTO.nationality);
    let model: EurostatResponse;

    model.currentAvgSubtractionPerCapita = data.response;
    model.year = data.year;
    return model;
  }

  async FetchAvalivableEurostatData(
    getDTO: GetEurostatSubtraction,
  ): Promise<EurostatResponse> {
    const data = await fetchData(getDTO.year, getDTO.nationality);
    let model: EurostatResponse;

    model.currentAvgSubtractionPerCapita = data.response;
    return model;
  }
}
