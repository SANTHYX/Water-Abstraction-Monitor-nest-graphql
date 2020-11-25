import { Controller, Get, Query } from '@nestjs/common';
import { GetAnyEurostatData } from 'src/dto/eurostat/get.eurostat.subtraction';
import { EurostatResponse } from 'src/models/responses/eurostat.response.model';
import { EurostatService } from 'src/services/eurostat.service';
import { GetCurrentEurostatData } from 'src/dto/eurostat/get.current.eurostat.data';

@Controller('eurostat')
export class EurostatController {
  constructor(private readonly eurostatService: EurostatService) {}

  @Get('current')
  async FetchCurrentData(
    @Query() data: GetCurrentEurostatData,
  ): Promise<EurostatResponse> {
    return await this.eurostatService.FetchCurrentEurostatData(data);
  }

  @Get('any')
  async BrowseArchivalData(
    @Query() data: GetAnyEurostatData,
  ): Promise<EurostatResponse> {
    return await this.eurostatService.FetchAnyEurostatData(data);
  }
}
