import { GenerateStatisticsDTO } from 'src/dto/statistics/generate.statistics.dto';
import { UpdateStatisticsDTO } from 'src/dto/statistics/update.statistics.dto';

export interface IStatisticsService {
  GenerateStatistics(statisticsDTO: GenerateStatisticsDTO): Promise<void>;
  UpdateStatistics(statisticsDTO: UpdateStatisticsDTO): Promise<void>;
}
