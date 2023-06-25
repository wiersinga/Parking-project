import { Entity, OneToOne, JoinColumn,Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class ParkingEntity {
    @PrimaryGeneratedColumn()
    id: number
     
    @Column()
    busy: boolean
}
