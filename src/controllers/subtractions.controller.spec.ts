import { Test, TestingModule } from '@nestjs/testing';
import { SubtractionsController } from './subtractions.controller';

describe('SubtractionsController', () => {
  let controller: SubtractionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubtractionsController],
    }).compile();

    controller = module.get<SubtractionsController>(SubtractionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
