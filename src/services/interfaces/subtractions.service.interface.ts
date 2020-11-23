import { AddSubtractionDTO } from 'src/dto/subtractions/add.subtraction.dto';
import { DeleteSubtractionsDTO } from 'src/dto/subtractions/delete.subtraction.dto';

export interface ISubtractionsService {
  AddSubtraction(subtraction: AddSubtractionDTO): Promise<void>;
  RemoveSubtraction(subtractionDTO: DeleteSubtractionsDTO): Promise<void>;
}
