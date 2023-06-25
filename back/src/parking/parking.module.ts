import { Module } from '@nestjs/common';
import { ParkingService } from './service/parking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingEntity } from './parking.entity';
import { ParkingController } from './controller/parking.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingEntity])],
  providers: [ParkingService],
  controllers: [ParkingController]
})
export class ParkingModule {}
