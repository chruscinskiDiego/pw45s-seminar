import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({type: 'varchar', length: '50'})
    firstName: string;

    @Column({type: 'varchar', length: '255'})
    lastName: string;

    @Column({type: 'varchar', length: '255'})
    email: string;

    @Column({type: 'varchar', length: '255'})
    phoneNumber: string;
    
    @Column({type: 'varchar', length: '255', select: false})
    password: string;

    @Column({type: 'boolean', default: true})
    isActive: boolean;

    
}
