import { Users } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categories {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({type: 'varchar', length: 100})
    name: string;

    @ManyToOne(() => Users, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    user: Users;


}
