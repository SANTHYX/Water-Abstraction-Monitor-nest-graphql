import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from 'src/ormconfig.dev';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { StatisticsModule } from './statistics.module';
import { EurostatModule } from './eurostat.module';
import { UsersModule } from './users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig),
    UsersModule,
    StatisticsModule,
    EurostatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
