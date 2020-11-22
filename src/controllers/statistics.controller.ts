import { Body, Controller, Patch, Post } from '@nestjs/common';
import { GenerateStatisticsDTO } from 'src/dto/statistics/generate.statistics.dto';
import { UpdateStatisticsDTO } from 'src/dto/statistics/update.statistics.dto';
import { StatisticsService } from 'src/services/statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Post()
  async GenerateStatistics(
    @Body() statistics: GenerateStatisticsDTO,
  ): Promise<void> {
    await this.statisticsService.GenerateStatistics(statistics);
  }

  @Patch()
  async UpdateStatistics(
    @Body() statistics: UpdateStatisticsDTO,
  ): Promise<void> {
    await this.statisticsService.UpdateStatistics(statistics);
  }
}
