import { Test, TestingModule } from '@nestjs/testing';
import { CardprovisionService } from './cardprovision.service';

describe('CardprovisionService', () => {
  let service: CardprovisionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardprovisionService],
    }).compile();

    service = module.get<CardprovisionService>(CardprovisionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
