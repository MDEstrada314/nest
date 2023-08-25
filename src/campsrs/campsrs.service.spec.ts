import { Test, TestingModule } from '@nestjs/testing';
import { CampsrsService } from './campsrs.service';

describe('CampsrsService', () => {
  let service: CampsrsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampsrsService],
    }).compile();

    service = module.get<CampsrsService>(CampsrsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
