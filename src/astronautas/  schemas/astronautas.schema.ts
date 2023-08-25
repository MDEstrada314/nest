import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import exp from "constants";

export enum AstronautaTipo{
    comandante = 'Comandante',
    tripulante = 'Tripulante'
}

@Schema()
export class Astronautas{
    @Prop({required:true})
    nombre:string;
    @Prop({required:true})
    mision:string;
    @Prop({default:AstronautaTipo.tripulante})
    tipo:AstronautaTipo;  

}

export const AstronautaSchema = SchemaFactory.createForClass(Astronautas)
