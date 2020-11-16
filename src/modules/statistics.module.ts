import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatisticsController } from 'src/controllers/statistics.controller';
import { Statistics } from 'src/models/statistics.model';
import { StatisticsService } from 'src/services/statistics.service';

@Module({
  imports: [TypeOrmModule.forFeature([Statistics])],
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
