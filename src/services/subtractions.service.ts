import { Injectable } from '@nestjs/common';
import { AddSubtractionDTO } from 'src/dto/subtractions/add.subtraction.dto';
import { Subtraction } from 'src/models/entities/subtractions.model';
import { SubtractionsRepository } from 'src/repositories/subtractions.repository';
import { UsersRepository } from 'src/repositories/users.repository';
import { ISubtractionsService } from './interfaces/subtractions.service.interface';

@Injectable()
export class SubtractionsService implements ISubtractionsService {
  constructor(
    private readonly subtractionsRepository: SubtractionsRepository,
    private readonly userRepository: UsersRepository,
  ) {}

  async AddSubtraction(subtraction: AddSubtractionDTO): Promise<void> {
    const user = await this.userRepository.findOne({
      login: subtraction.login,
    });
    const newSubtraction = new Subtraction();

    newSubtraction.task = subtraction.task;
    newSubtraction.value = subtraction.value;
    newSubtraction.user = user;

    await this.subtractionsRepository.save(newSubtraction);
  }
}
