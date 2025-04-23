import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Accounts } from './entities/account.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { BankService } from 'src/bank/bank.service';

@Injectable()
export class AccountService {

  constructor(

    @InjectRepository(Accounts)
    private accountRepository: Repository<Accounts>,
    private readonly userService: UserService,
    private readonly bankService: BankService,
  ) { }


  async createAccount(createAccountDto: CreateAccountDto) {
    try {

      const { userId, bankId } = createAccountDto;

      const user = await this.userService.findOneUser(userId);
      const bank = await this.bankService.findOneBank(bankId);

      if (!user) {
        throw new NotFoundException('Usuário não encontrado!');
      }

      if (!bank) {
        throw new NotFoundException('Banco não encontrado!');
      }

      const createAccountDTO = {
        user,
        bank,
        ...createAccountDto,
      }

      const account = this.accountRepository.create(createAccountDTO);

      const createdAccount = this.accountRepository.save(account);

      return createdAccount;

    }catch (error) {

      throw error;

    }
  }

  async findAllAccounts() {

    const accounts = await this.accountRepository.find();

    return accounts;

  }

  async findOneAccount(id: number) {
    
    const account = await this.accountRepository.findOneBy({
      id: id,
    });

    if(!account) {
      throw new NotFoundException('Conta não encontrada!');
    }

    return account;
  }

  async findUserAccounts(id: number) {
      
      const user = await this.userService.findOneUser(id);
  
      if(!user) {
        throw new NotFoundException('Usuário não encontrado!');
      }
  
      const accounts = await this.accountRepository.find({
        where: {
          user: {
            id: id,
          },
        },
      });
  
      return accounts;
    }

  async updateAccount(id: number, updateAccountDto: UpdateAccountDto) {
    
    const account = await this.accountRepository.preload({
      id,
      ...updateAccountDto,
    });

    if(!account) {
      throw new NotFoundException('Conta não encontrada!');
    }

    return this.accountRepository.save(account);

  }

  async removeAccount(id: number) {
    
    const account = await this.findOneAccount(id);

    if(!account) {
      throw new NotFoundException('Conta não encontrada!');
    }

    return this.accountRepository.remove(account);
    
  }
}
