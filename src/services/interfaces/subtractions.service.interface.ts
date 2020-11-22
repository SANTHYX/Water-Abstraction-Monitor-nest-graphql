import { AddSubtractionDTO } from 'src/dto/subtractions/add.subtraction.dto';

export interface ISubtractionsService {
  AddSubtraction(subtraction: AddSubtractionDTO): Promise<void>;
}
