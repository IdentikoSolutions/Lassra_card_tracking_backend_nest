import { Test, TestingModule } from '@nestjs/testing';
import { CardreceiptController } from './cardreceipt.controller';
import { CardreceiptService } from './cardreceipt.service';

describe('CardreceiptController', () => {
  let controller: CardreceiptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardreceiptController],
      providers: [CardreceiptService],
    }).compile();

    controller = module.get<CardreceiptController>(CardreceiptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
