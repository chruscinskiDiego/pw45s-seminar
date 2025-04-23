import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BankService } from './bank.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';


@ApiTags('CRUD de Bancos')
@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @ApiBody({ type: CreateBankDto })
  @Post()
  async createBank(@Body() createBankDto: CreateBankDto) {
    return await this.bankService.createBank(createBankDto);
  }

  @Get('/all')
  async findAllBanks() {
    return await this.bankService.findAllBanks();
  }

  @Get(':id')
  async findOneBank(@Param('id', ParseIntPipe) id: number) {
    return await this.bankService.findOneBank(+id);
  }

  @Get('/user/:id')
  async findUserBanks(@Param('id', ParseIntPipe) id: number) {
    return await this.bankService.findUserBanks(id);
  }

  @ApiBody({ type: CreateBankDto })
  @Patch(':id')
  async updateBank(@Param('id', ParseIntPipe) id: number, @Body() updateBankDto: UpdateBankDto) {
    return await this.bankService.updateBank(id, updateBankDto);
  }

  @Delete(':id')
  async removeBank(@Param('id', ParseIntPipe) id: number) {
    return await this.bankService.removeBank(id);
  }
}
