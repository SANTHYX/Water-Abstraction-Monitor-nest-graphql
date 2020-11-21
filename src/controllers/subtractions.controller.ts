import { Controller, Get, Query } from '@nestjs/common';
import { GetEurostatSubtraction } from 'src/dto/subtractions/get.eurostat.subtraction';
import { EurostatResponse } from 'src/models/responses/eurostat.response.model';
import { SubtractionsService } from 'src/services/subtractions.service';

@Controller('subtractions')
export class SubtractionsController {
  constructor(private readonly subtractionsService: SubtractionsService) {}

  @Get()
  async FetchEurostatDataForUser(
    @Query() data: GetEurostatSubtraction,
  ): Promise<EurostatResponse> {
    return await this.subtractionsService.FetchCurrentEurostatData(data);
  }

  @Get()
  async BrowseEurostatDataByGeoAndYear(
    @Query() data: GetEurostatSubtraction,
  ): Promise<EurostatResponse> {
    return await this.subtractionsService.FetchAvalivableEurostatData(data);
  }
}
