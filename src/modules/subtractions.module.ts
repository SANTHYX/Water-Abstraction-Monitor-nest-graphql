import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubtractionsRepository } from 'src/repositories/subtractions.repository';
import { UsersRepository } from 'src/repositories/users.repository';
import { SubtractionsService } from 'src/services/subtractions.service';
import { SubtractionsController } from 'src/controllers/subtractions.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubtractionsRepository, UsersRepository]),
  ],
  controllers: [SubtractionsController],
  providers: [SubtractionsService],
})
export class SubtractionsModule {}
