import { Injectable, Module } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Astronautas } from './  schemas/astronautas.schema';
import {Model} from 'mongoose';
@Injectable()
export class AstronautasService {
    constructor(
        @InjectModel(Astronautas.name) private astronautasModel:Model<Astronautas>
    ){}

    async create(astronautas:any){
        const createAstronautas = new this.astronautasModel(astronautas)
     return createAstronautas.save()
    }
}
