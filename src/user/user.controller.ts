import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('CRUD de Usuários')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBody({type: CreateUserDto})
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @Get('/all')
  async findAllUsers() {
    return await this.userService.findAllUsers();
  }

  @Get(':id')
  async findOneUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findOneUser(id);
  }

  @ApiBody({type: CreateUserDto})
  @Patch(':id')
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async removerUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.removeUser(id);
  }
}
