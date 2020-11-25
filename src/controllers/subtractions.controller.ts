import { Body, Controller, Delete, Post, UseGuards } from '@nestjs/common';
import { AddSubtractionDTO } from 'src/dto/subtractions/add.subtraction.dto';
import { DeleteSubtractionsDTO } from 'src/dto/subtractions/delete.subtraction.dto';
import { SubtractionsService } from 'src/services/subtractions.service';
import { JwtAuthGuard } from 'src/strategy/jwt-auth';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
@Controller('subtractions')
export class SubtractionsController {
  constructor(private readonly subtractionsService: SubtractionsService) {}

  @ApiBody({ type: AddSubtractionDTO })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async AddSubtraction(@Body() subtraction: AddSubtractionDTO) {
    await this.subtractionsService.AddSubtraction(subtraction);
  }

  @ApiBody({ type: DeleteSubtractionsDTO })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete()
  async RemoveSubtraction(@Body() subtraction: DeleteSubtractionsDTO) {
    await this.subtractionsService.RemoveSubtraction(subtraction);
  }
}
