import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/controllers/auth.controller';
import { JwtSetup } from 'src/jwt.dev';
import { UsersRepository } from 'src/repositories/users.repository';
import { JwtStrategy } from 'src/strategy/jwt-strategy';
import { AuthService } from '../services/auth.service';

@Module({
  imports: [
    JwtModule.register(JwtSetup),
    TypeOrmModule.forFeature([UsersRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
