import { Module } from '@nestjs/common';
import { CampsrsService } from './campsrs.service';
import { CampsrsController } from './campsrs.controller';

@Module({
  controllers: [CampsrsController],
  providers: [CampsrsService],
})
export class CampsrsModule {}
