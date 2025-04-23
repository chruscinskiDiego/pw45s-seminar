import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Expenses } from './entities/expense.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { CategoryService } from 'src/category/category.service';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class ExpenseService {

  constructor(
    @InjectRepository(Expenses)
    private expenseRepository: Repository<Expenses>,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService,
    private readonly accountService: AccountService,
  ) { }

  async createExpense(createExpenseDto: CreateExpenseDto) {

    const { userId, categoryId, accountId } = createExpenseDto;

    try {

      const user = await this.userService.findOneUser(userId);
      const category = await this.categoryService.findOneCategory(categoryId);
      const account = await this.accountService.findOneAccount(accountId);

      if (!user) {
        throw new NotFoundException('Usuário não encontrado!');
      }

      if (!category) {
        throw new NotFoundException('Categoria não encontrada!');
      }

      if (!account) {
        throw new NotFoundException('Conta não encontrada!');
      }

      const createExpenseDTO = {
        user,
        category,
        account,
        ...createExpenseDto,
      }

      const expense = this.expenseRepository.create(createExpenseDTO);

      const createdExpense = await this.expenseRepository.save(expense);

      return createdExpense;
    } catch (error) {
      throw error;
    }
  }

  async findAllExpenses() {

    const expenses = await this.expenseRepository.find();

    return expenses;

  }

  async findOneExpense(id: number) {
    
    const expense = await this.expenseRepository.findOneBy({
      id: id,
    });

    if(!expense) {
      throw new NotFoundException('Despesa não encontrada!');
    }

    return expense;
  }

  async findUserExpenses(id: number){

    const user = this.userService.findOneUser(id);

    if(!user) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    const expenses = await this.expenseRepository.find({
      where: {
        user: { id: id },
      }
    });

    if(!expenses) {
      throw new NotFoundException('Nenhuma despesa encontrada!');
    }

    return expenses;
  }

  async updateExpense(id: number, updateExpenseDto: UpdateExpenseDto) {
    
    const expense = await this.expenseRepository.preload({
      id,
      ...updateExpenseDto,
    });

    if(!expense) {
      throw new NotFoundException('Despesa não encontrada!');
    }

    return this.expenseRepository.save(expense);
  }

  async removeExpense(id: number) {
    
    const expense = await this.findOneExpense(id);

    if(!expense) {
      throw new NotFoundException('Despesa não encontrada!');
    }

    return this.expenseRepository.remove(expense);

  }
}
