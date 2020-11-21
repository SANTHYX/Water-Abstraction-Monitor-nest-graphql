import { Injectable } from '@nestjs/common';
import { CreateStatisticsDTO } from 'src/dto/statistics/create.statistics.dto';
import { UpdateStatisticsDTO } from 'src/dto/statistics/update.statistics.dto';
import { StatisticsRepository } from 'src/repositories/statistics.repository';
import { IStatisticsService } from './interfaces/statistics.service.interface';

@Injectable()
export class StatisticsService implements IStatisticsService {
  constructor(private readonly statisticsRepository: StatisticsRepository) {}

  GenerateStatistics(statisticsDTO: CreateStatisticsDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  UpdateStatistics(statisticsDTO: UpdateStatisticsDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
