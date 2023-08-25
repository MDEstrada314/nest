import { Injectable } from '@nestjs/common';
import { CreateCampsrDto } from './dto/create-campsr.dto';
import { UpdateCampsrDto } from './dto/update-campsr.dto';

@Injectable()
export class CampsrsService {
  create(createCampsrDto: CreateCampsrDto) {
    return 'This action adds a new campsr';
  }

  findAll() {
    return `This action returns all campsrs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campsr`;
  }

  update(id: number, updateCampsrDto: UpdateCampsrDto) {
    return `This action updates a #${id} campsr`;
  }

  remove(id: number) {
    return `This action removes a #${id} campsr`;
  }
}
