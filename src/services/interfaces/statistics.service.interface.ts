import { CreateStatisticsDTO } from 'src/dto/statistics/create.statistics.dto';
import { UpdateStatisticsDTO } from 'src/dto/statistics/update.statistics.dto';

export interface IStatisticsService {
  GenerateStatistics(statisticsDTO: CreateStatisticsDTO): Promise<void>;
  UpdateStatistics(statisticsDTO: UpdateStatisticsDTO): Promise<void>;
}
