import { JwtModuleOptions } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

dotenv.config();

export const JwtSetup: JwtModuleOptions = {
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: '300s' },
};
