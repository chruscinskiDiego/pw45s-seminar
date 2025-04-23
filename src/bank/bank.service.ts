import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Banks } from './entities/bank.entity';

@Injectable()
export class BankService {

  constructor(
    @InjectRepository(Banks)
    private bankRepository: Repository<Banks>,
    private readonly userService: UserService,
  ) { }

  async createBank(createBankDto: CreateBankDto) {

    const { userId } = createBankDto;

    const user = await this.userService.findOneUser(userId);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    const createBankDTO = {
      user,
      ...createBankDto
    }
    
    const bank = this.bankRepository.create(createBankDTO);

    const createdBank = await this.bankRepository.save(bank);

    return createdBank;

  }

  async findAllBanks() {

    const banks = await this.bankRepository.find();

    return banks;

  }

  async findOneBank(id: number) {

    const bank = await this.bankRepository.findOneBy({
      id: id,
    });

    if (!bank) {
      throw new NotFoundException('Banco não encontrado!');
    }

    return bank;

  }

  async findUserBanks(id: number){

    const user = await this.userService.findOneUser(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    const banks = await this.bankRepository.find({
      where: {
        user: {
          id: id,
        },
      },
    });

    return banks;
  }
  

  async updateBank(id: number, updateBankDto: UpdateBankDto) {

    const bank = await this.bankRepository.preload({
      id,
      ...updateBankDto,
    });

    if (!bank) {
      throw new NotFoundException('Banco não encontrado!');
    }

    return this.bankRepository.save(bank);

  }

  async removeBank(id: number) {

    const bank = await this.findOneBank(id);

    if (!bank) {
      throw new NotFoundException('Banco não encontrado!');
    }

    return this.bankRepository.remove(bank);
  }
}
