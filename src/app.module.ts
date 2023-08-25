import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CampsrsModule } from './campsrs/campsrs.module';
import { AstronautasModule } from './astronautas/astronautas.module';

@Module({
  imports: [CampsrsModule, MongooseModule.forRoot('mongodb+srv://userastronautas:MDEL16180@clusterastronauta.geqm84e.mongodb.net/astronautasDB'), AstronautasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
