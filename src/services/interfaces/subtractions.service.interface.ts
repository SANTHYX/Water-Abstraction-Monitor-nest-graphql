import { PaginationDTO } from 'src/dto/pagination/pagination.dto';
import { AddSubtractionDTO } from 'src/dto/subtractions/add.subtraction.dto';
import { DeleteSubtractionsDTO } from 'src/dto/subtractions/delete.subtraction.dto';
import { Subtraction } from 'src/models/entities/subtractions.model';

export interface ISubtractionsService {
  BrowseAllUserSubtraction(
    pagination: PaginationDTO,
    login: string,
  ): Promise<Subtraction[]>;
  AddSubtraction(subtraction: AddSubtractionDTO): Promise<void>;
  RemoveSubtraction(subtractionDTO: DeleteSubtractionsDTO): Promise<void>;
}
