import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampsrsService } from './campsrs.service';
import { CreateCampsrDto } from './dto/create-campsr.dto';
import { UpdateCampsrDto } from './dto/update-campsr.dto';

@Controller('campsrs')
export class CampsrsController {
  constructor(private readonly campsrsService: CampsrsService) {}

  @Post()
  create(@Body() createCampsrDto: CreateCampsrDto) {
    return this.campsrsService.create(createCampsrDto);
  }

  @Get()
  findAll() {
    return this.campsrsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campsrsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampsrDto: UpdateCampsrDto) {
    return this.campsrsService.update(+id, updateCampsrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campsrsService.remove(+id);
  }
}
