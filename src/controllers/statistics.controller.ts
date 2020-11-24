import { Body, Controller, Patch, Post, UseGuards } from '@nestjs/common';
import { GenerateStatisticsDTO } from 'src/dto/statistics/generate.statistics.dto';
import { UpdateStatisticsDTO } from 'src/dto/statistics/update.statistics.dto';
import { StatisticsService } from 'src/services/statistics.service';
import { JwtAuthGuard } from 'src/strategy/jwt-auth';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @UseGuards(JwtAuthGuard)
  @Patch()
  async UpdateStatistics(
    @Body() statistics: UpdateStatisticsDTO,
  ): Promise<void> {
    await this.statisticsService.UpdateStatistics(statistics);
  }
}
