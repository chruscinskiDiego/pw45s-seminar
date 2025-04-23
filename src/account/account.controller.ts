import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';


@Controller('account')
@ApiTags('CRUD de Contas Bancárias')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiBody({type: CreateAccountDto})
  @Post()
  async createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.accountService.createAccount(createAccountDto);
  }

  @Get('/all')
  async findAllAccounts() {
    return this.accountService.findAllAccounts();
  }

  @Get(':id')
  async findOneAccount(@Param('id', ParseIntPipe) id: number) {
    return await this.accountService.findOneAccount(id);
  }

  @Get('/user/:id')
  async findUserAccounts(@Param('id', ParseIntPipe) id: number) {
    return await this.accountService.findUserAccounts(id);
  }

  @ApiBody({type: CreateAccountDto})
  @Patch(':id')
  async updateAccount(@Param('id', ParseIntPipe) id: number, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.updateAccount(id, updateAccountDto);
  }

  @Delete(':id')
  async removeAccount(@Param('id', ParseIntPipe) id: number) {
    return this.accountService.removeAccount(id);
  }
}
