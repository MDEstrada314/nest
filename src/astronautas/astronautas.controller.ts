import { Controller,Post, Body } from '@nestjs/common';
import { AstronautasService } from './astronautas.service';


@Controller('astronautas')
export class AstronautasController {
    constructor(private astronautaService:AstronautasService){}
    @Post()
    async creare(@Body() createAstronautas:any){
    return createAstronautas 
  } 
}
