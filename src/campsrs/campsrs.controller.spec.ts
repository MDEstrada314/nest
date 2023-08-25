import { Test, TestingModule } from '@nestjs/testing';
import { CampsrsController } from './campsrs.controller';
import { CampsrsService } from './campsrs.service';

describe('CampsrsController', () => {
  let controller: CampsrsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampsrsController],
      providers: [CampsrsService],
    }).compile();

    controller = module.get<CampsrsController>(CampsrsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
