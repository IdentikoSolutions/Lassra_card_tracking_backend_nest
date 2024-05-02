import { Test, TestingModule } from '@nestjs/testing';
import { RetrivalController } from './retrival.controller';
import { RetrivalService } from './retrival.service';

describe('RetrivalController', () => {
  let controller: RetrivalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetrivalController],
      providers: [RetrivalService],
    }).compile();

    controller = module.get<RetrivalController>(RetrivalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
