import { CreateStatisticsDTO } from '../statistics/create.statistics.dto';

export class CreateUserDTO {
  login: string;
  password: string;
  email: string;
  nationality: string;
  statistics: CreateStatisticsDTO;
}
