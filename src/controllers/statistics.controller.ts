import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CreateStatisticsDTO } from 'src/dto/statistics/create.statistics.dto';
import { UpdateStatisticsDTO } from 'src/dto/statistics/update.statistics.dto';
import { StatisticsService } from 'src/services/statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Post()
  async GenerateStatistics(@Body() statistics: CreateStatisticsDTO) {
    await this.statisticsService.GenerateStatistics(statistics);
  }

  @Patch()
  async UpdateStatistics(@Body() statistics: UpdateStatisticsDTO) {
    await this.statisticsService.UpdateStatistics(statistics);
  }
}
