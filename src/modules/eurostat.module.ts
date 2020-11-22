import { Module } from '@nestjs/common';
import { EurostatController } from 'src/controllers/eurostat.controller';
import { EurostatService } from 'src/services/eurostat.service';

@Module({
  controllers: [EurostatController],
  providers: [EurostatService],
})
export class EurostatModule {}
