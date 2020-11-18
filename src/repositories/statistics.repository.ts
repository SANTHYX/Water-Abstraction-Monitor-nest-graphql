import { Statistics } from 'src/models/statistics.model';
import { Repository } from 'typeorm';
import { IStatisticsRepository } from './interfaces/statistics.repository.interface';

export class StatisticsRepository extends Repository<Statistics>
  implements IStatisticsRepository {
      
  }
