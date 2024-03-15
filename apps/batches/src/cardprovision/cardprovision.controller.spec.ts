import { Test, TestingModule } from '@nestjs/testing';
import { CardprovisionController } from './cardprovision.controller';
import { CardprovisionService } from './cardprovision.service';

describe('CardprovisionController', () => {
  let controller: CardprovisionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardprovisionController],
      providers: [CardprovisionService],
    }).compile();

    controller = module.get<CardprovisionController>(CardprovisionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
