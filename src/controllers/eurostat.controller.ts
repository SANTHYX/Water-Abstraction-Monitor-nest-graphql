import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { GetEurostatSubtraction } from 'src/dto/eurostat/get.eurostat.subtraction';
import { EurostatResponse } from 'src/models/responses/eurostat.response.model';
import { EurostatService } from 'src/services/eurostat.service';
import { JwtAuthGuard } from 'src/strategy/jwt-auth';

@Controller('eurostat')
export class EurostatController {
  constructor(private readonly eurostatService: EurostatService) {}

  @UseGuards(JwtAuthGuard)
  @Get('current')
  async FetchCurrentData(
    @Query() data: GetEurostatSubtraction,
  ): Promise<EurostatResponse> {
    return await this.eurostatService.FetchCurrentEurostatData(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('any')
  async BrowseArchivalData(
    @Query() data: GetEurostatSubtraction,
  ): Promise<EurostatResponse> {
    return await this.eurostatService.FetchAnyEurostatData(data);
  }
}
