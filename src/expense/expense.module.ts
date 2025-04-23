import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expenses } from './entities/expense.entity';
import { UserModule } from 'src/user/user.module';
import { BankModule } from 'src/bank/bank.module';
import { AccountModule } from 'src/account/account.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Expenses]),
    UserModule, 
    AccountModule,
    CategoryModule,
  ],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpenseModule {}
