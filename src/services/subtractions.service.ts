import { Injectable } from '@nestjs/common';
import { PaginationDTO } from 'src/dto/pagination/pagination.dto';
import { AddSubtractionDTO } from 'src/dto/subtractions/add.subtraction.dto';
import { DeleteSubtractionsDTO } from 'src/dto/subtractions/delete.subtraction.dto';
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

  async BrowseAllUserSubtraction(
    pagination: PaginationDTO,
    login: string,
  ): Promise<Subtraction[]> {
    const { from, to } = pagination;
    const user = await this.userRepository.findOne({ login: login });

    if (from || to) {
      return await this.subtractionsRepository.find({
        where: { user: user },
        skip: from,
        take: to,
        order: {
          createdAt: 'DESC',
        },
      });
    } else return await this.subtractionsRepository.find();
  }

  async AddSubtraction(subtractionDTO: AddSubtractionDTO): Promise<void> {
    const user = await this.userRepository.findOne(
      {
        login: subtractionDTO.login,
      },
      { relations: ['statistics'] },
    );
    const newSubtraction = new Subtraction();

    newSubtraction.taskName = subtractionDTO.taskName;
    newSubtraction.value = subtractionDTO.value;
    newSubtraction.user = user;
    user.statistics.avgSubtraction += subtractionDTO.value;

    await this.subtractionsRepository.save(newSubtraction);
    await this.userRepository.save(user);
  }

  async RemoveSubtraction(
    subtractionDTO: DeleteSubtractionsDTO,
  ): Promise<void> {
    const subtraction = await this.subtractionsRepository.findOne(
      subtractionDTO.taskId,
    );
    const user = await this.userRepository.findOne(
      {
        login: subtractionDTO.login,
      },
      { relations: ['statistics'] },
    );

    user.statistics.avgSubtraction -= subtraction.value;

    await this.userRepository.save(user);
    await this.subtractionsRepository.remove(subtraction);
  }
}
