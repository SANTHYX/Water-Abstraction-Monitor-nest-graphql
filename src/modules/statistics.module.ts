import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatisticsController } from 'src/controllers/statistics.controller';
import { StatisticsRepository } from 'src/repositories/statistics.repository';
import { StatisticsService } from 'src/services/statistics.service';

@Module({
  imports: [TypeOrmModule.forFeature([StatisticsRepository])],
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
