import { Accounts } from "src/account/entities/account.entity";
import { Categories } from "src/category/entities/category.entity";
import { Users } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Expenses {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'decimal'})
    value: number;

    @Column({type: 'varchar'})
    situation: string;

    @Column({type: 'varchar'})
    obs: string;

    @Column({type: 'date'})
    validityDate: Date;

    @ManyToOne(() => Categories, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({ name: 'category_id' })
    category: Categories;

    @ManyToOne(() => Accounts, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({ name: 'account_id' })
    account: Accounts;

    @ManyToOne(() => Users, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({ name: 'user_id' })
    user: Users;
    
}
