import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accounts } from './entities/account.entity';
import { UserModule } from 'src/user/user.module';
import { BankModule } from 'src/bank/bank.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Accounts]),
    BankModule,
    UserModule,
  ],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService]
})
export class AccountModule {}
