import { Banks } from "src/bank/entities/bank.entity";
import { Users } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Accounts {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    number: string;

    @Column({ type: 'varchar'})
    type: string;

    @ManyToOne(() => Users, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({ name: 'user_id' })
    user: Users;

    @ManyToOne(() => Banks, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({ name: 'bank_id' })
    bank: Banks;

}
