import { Subtraction } from 'src/models/entities/subtractions.model';
import { EntityRepository, Repository } from 'typeorm';
import { ISubtractionsRepository } from './interfaces/subtractions.repository.interface';

@EntityRepository(Subtraction)
export class SubtractionsRepository extends Repository<Subtraction>
  implements ISubtractionsRepository {}
