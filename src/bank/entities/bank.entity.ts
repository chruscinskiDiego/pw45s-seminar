import { Users } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Banks {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({type: 'varchar', length: 100})
    name: string;

    @Column({type: 'varchar', length: 10})
    code: string;

    @ManyToOne(() => Users, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'userId'})
    user: Users;

}
