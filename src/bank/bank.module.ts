import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banks } from './entities/bank.entity';
import { UserModule } from 'src/user/user.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Banks]),
    UserModule
  ],
  controllers: [BankController],
  providers: [BankService],
  exports: [BankService]
})
export class BankModule { }
