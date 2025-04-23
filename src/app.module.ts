import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankModule } from './bank/bank.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { AccountModule } from './account/account.module';
import { ExpenseModule } from './expense/expense.module';
import { APP_FILTER } from '@nestjs/core';
import { NotFoundItemException } from './common/exceptions/not-found-item.exception';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      database: 'pilass',
      username: 'postgres',
      password: 'admin',
      autoLoadEntities: true, // carrega entidades sem precisar especifica-las
      synchronize: true, // sincroniza as entidades com o BD, NAO DEVE ser usado em prod
    }),
    BankModule,
    UserModule,
    CategoryModule,
    AccountModule,
    ExpenseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: NotFoundItemException,
    }
  ],
})
export class AppModule { }
