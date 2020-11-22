import { PartialType } from '@nestjs/mapped-types';
import { GenerateStatisticsDTO } from './generate.statistics.dto';

export class UpdateStatisticsDTO extends PartialType(GenerateStatisticsDTO) {}
