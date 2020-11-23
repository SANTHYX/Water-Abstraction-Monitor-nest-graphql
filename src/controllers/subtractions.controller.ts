import { Body, Controller, Delete, Post } from '@nestjs/common';
import { AddSubtractionDTO } from 'src/dto/subtractions/add.subtraction.dto';
import { DeleteSubtractionsDTO } from 'src/dto/subtractions/delete.subtraction.dto';
import { SubtractionsService } from 'src/services/subtractions.service';

@Controller('subtractions')
export class SubtractionsController {
  constructor(private readonly subtractionsService: SubtractionsService) {}

  @Post()
  async AddSubtraction(@Body() subtraction: AddSubtractionDTO) {
    await this.subtractionsService.AddSubtraction(subtraction);
  }

  @Delete()
  async RemoveSubtraction(@Body() subtraction: DeleteSubtractionsDTO) {
    await this.subtractionsService.RemoveSubtraction(subtraction);
  }
}
