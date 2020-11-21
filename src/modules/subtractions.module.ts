import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubtractionsController } from 'src/controllers/subtractions.controller';
import { SubtractionsRepository } from 'src/repositories/subtractions.repository';
import { SubtractionsService } from 'src/services/subtractions.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubtractionsRepository])],
  controllers: [SubtractionsController],
  providers: [SubtractionsService],
})
export class SubtractionsModule {}
