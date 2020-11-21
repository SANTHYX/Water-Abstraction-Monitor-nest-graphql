import { Statistics } from 'src/models/entities/statistics.model';
import { EntityRepository, Repository } from 'typeorm';
import { IStatisticsRepository } from './interfaces/statistics.repository.interface';
@EntityRepository(Statistics)
export class StatisticsRepository extends Repository<Statistics>
  implements IStatisticsRepository {}
