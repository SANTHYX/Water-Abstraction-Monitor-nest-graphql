import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStatisticsDTO } from 'src/dto/statistics/create.statistics.dto';
import { UpdateStatisticsDTO } from 'src/dto/statistics/update.statistics.dto';
import { Statistics } from 'src/models/statistics.model';
import { eurostatApi } from 'src/plugins/axios';
import { Repository } from 'typeorm';
import { IStatisticsService } from './interfaces/statistics.service.interface';

@Injectable()
export class StatisticsService implements IStatisticsService {
  constructor(
    @InjectRepository(Statistics)
    private readonly statisticsRepository: Repository<Statistics>,
  ) {}

  async GenerateStatistics(statisticsDTO: CreateStatisticsDTO): Promise<void> {
    const response = await eurostatApi.get('?time=2018?geo=PL');
    response.data.value;
    await this.statisticsRepository.save(statisticsDTO);
  }

  async UpdateStatistics(statisticsDTO: UpdateStatisticsDTO): Promise<void> {
    const statistics = await this.statisticsRepository.preload({
      ...statisticsDTO,
    });
    await this.statisticsRepository.save(statistics);
  }
}
