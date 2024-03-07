import { Test, TestingModule } from '@nestjs/testing';
import { CardreceiptService } from './cardreceipt.service';

describe('CardreceiptService', () => {
  let service: CardreceiptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardreceiptService],
    }).compile();

    service = module.get<CardreceiptService>(CardreceiptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
