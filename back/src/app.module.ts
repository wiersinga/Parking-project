import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingModule } from './parking/parking.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingController } from './parking/controller/parking.controller';
import { ParkingService } from './parking/service/parking.service';


@Module({
  imports: [ParkingModule,TypeOrmModule.forRoot({
                              type :"sqlite",
                              database: "parkingDB.db",
                              entities: [__dirname + "/**/*.entity{.ts,.js}"]                              
                            })], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
