import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParkingEntity } from '../parking.entity';


@Injectable()
export class ParkingService {
    constructor(@InjectRepository(ParkingEntity) private parkingRepository: Repository<ParkingEntity>) { }

    async status(): Promise<ParkingEntity[]> {        
        return await this.parkingRepository.find();        
    }

    async enter(): Promise<number> {

        var freePlace = await this.parkingRepository.findOneBy({ busy: false });  

        if(freePlace == null) { // parking is full 
           return -1;
        } else {
            await this.parkingRepository.update(freePlace.id, {
                busy: true
             });
            return freePlace.id;
        }       
    }

    async exit(placeNm: number): Promise<boolean> {
        
        var freePlace = await this.parkingRepository.findOneBy({ id: placeNm });
        
        if (freePlace == null) {    // parking number is wrong
            return false;
        } else {
            
            await this.parkingRepository.update(freePlace.id, {
                busy: false
             });
            return true;
        }
    }      
}