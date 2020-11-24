import { UpdateStatisticsDTO } from 'src/dto/statistics/update.statistics.dto';

export interface IStatisticsService {
  UpdateStatistics(statisticsDTO: UpdateStatisticsDTO): Promise<void>;
}
