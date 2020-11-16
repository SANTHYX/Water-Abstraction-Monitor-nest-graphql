import { PartialType } from '@nestjs/mapped-types';
import { CreateStatisticsDTO } from './create.statistics.dto';

export class UpdateStatisticsDTO extends PartialType(CreateStatisticsDTO) {}
