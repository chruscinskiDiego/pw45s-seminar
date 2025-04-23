import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('expense')
@ApiTags('CRUD de Despesas')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @ApiBody({type: CreateExpenseDto})
  @Post()
  async createExpense(@Body() createExpenseDto: CreateExpenseDto) {
    return await this.expenseService.createExpense(createExpenseDto);
  }

  @Get('/all')
  async findAllExpenses() {
    return await this.expenseService.findAllExpenses();
  }

  @Get(':id')
  async findOneExpense(@Param('id', ParseIntPipe) id: number) {
    return await this.expenseService.findOneExpense(id);
  }

  @Get('/user/:id')
  async findUserExpenses(@Param('id', ParseIntPipe) id: number) {
    return await this.expenseService.findUserExpenses(id);
  }

  @ApiBody({type: CreateExpenseDto})
  @Patch(':id')
  async updateExpense(@Param('id', ParseIntPipe) id: number, @Body() updateExpenseDto: UpdateExpenseDto) {
    return await this.expenseService.updateExpense(id, updateExpenseDto);
  }

  @Delete(':id')
  async removeExpense(@Param('id', ParseIntPipe) id: number) {
    return await this.expenseService.removeExpense(id);
  }
}
