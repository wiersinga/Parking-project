import { Controller, Get, Param } from '@nestjs/common';
import { ParkingService } from '../service/parking.service'
import { ParkingEntity } from '../parking.entity';
import { log } from 'console';

@Controller('parking')
export class ParkingController {
    constructor(private parkingService: ParkingService) { }

    @Get('status')
    async getParkingStatus(): Promise<ParkingEntity[]> {
        return await this.parkingService.status();
    } 

    @Get('enter')
    async getTicket(): Promise<number> {
        return await this.parkingService.enter();
    } 

    @Get('exit/:id')
    async payTicket(@Param() params: any) :Promise<boolean> {        
        return await this.parkingService.exit(params.id);
    } 
}