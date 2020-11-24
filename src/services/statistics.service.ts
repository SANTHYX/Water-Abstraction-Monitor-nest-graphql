import { Injectable } from '@nestjs/common';
import { GenerateStatisticsDTO } from 'src/dto/statistics/generate.statistics.dto';
import { UpdateStatisticsDTO } from 'src/dto/statistics/update.statistics.dto';
import { Statistics } from 'src/models/entities/statistics.model';
import { StatisticsRepository } from 'src/repositories/statistics.repository';
import { UsersRepository } from 'src/repositories/users.repository';
import { IStatisticsService } from './interfaces/statistics.service.interface';

@Injectable()
export class StatisticsService implements IStatisticsService {
  constructor(
    private readonly statisticsRepository: StatisticsRepository,
    private readonly userRepository: UsersRepository,
  ) {}

  UpdateStatistics(statisticsDTO: UpdateStatisticsDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
