import { Body, Controller, Patch, UseGuards } from '@nestjs/common';
import { UpdateStatisticsDTO } from 'src/dto/statistics/update.statistics.dto';
import { StatisticsService } from 'src/services/statistics.service';
import { JwtAuthGuard } from 'src/strategy/jwt-auth';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @ApiBearerAuth()
  @ApiBody({ type: UpdateStatisticsDTO })
  @UseGuards(JwtAuthGuard)
  @Patch()
  async UpdateStatistics(
    @Body() statistics: UpdateStatisticsDTO,
  ): Promise<void> {
    await this.statisticsService.UpdateStatistics(statistics);
  }
}
