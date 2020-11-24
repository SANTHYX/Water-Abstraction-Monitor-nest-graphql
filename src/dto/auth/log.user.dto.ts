import { IsNotEmpty, isNotEmpty } from 'class-validator';

export class LogUserDTO {
  @IsNotEmpty()
  login: string;

  @IsNotEmpty()
  password: string;
}
