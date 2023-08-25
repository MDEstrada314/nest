import { PartialType } from '@nestjs/mapped-types';
import { CreateCampsrDto } from './create-campsr.dto';

export class UpdateCampsrDto extends PartialType(CreateCampsrDto) {}
