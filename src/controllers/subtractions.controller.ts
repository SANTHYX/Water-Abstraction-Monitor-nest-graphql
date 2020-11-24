import { Body, Controller, Delete, Post, UseGuards } from '@nestjs/common';
import { AddSubtractionDTO } from 'src/dto/subtractions/add.subtraction.dto';
import { DeleteSubtractionsDTO } from 'src/dto/subtractions/delete.subtraction.dto';
import { SubtractionsService } from 'src/services/subtractions.service';
import { JwtAuthGuard } from 'src/strategy/jwt-auth';

@Controller('subtractions')
export class SubtractionsController {
  constructor(private readonly subtractionsService: SubtractionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async AddSubtraction(@Body() subtraction: AddSubtractionDTO) {
    await this.subtractionsService.AddSubtraction(subtraction);
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete()
  async RemoveSubtraction(@Body() subtraction: DeleteSubtractionsDTO) {
    await this.subtractionsService.RemoveSubtraction(subtraction);
  }
}
