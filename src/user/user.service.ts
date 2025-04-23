import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { first } from 'rxjs';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<Users> {

    try {

      const userDTO = {

        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        email: createUserDto.email,
        phoneNumber: createUserDto.phoneNumber,
        password: createUserDto.password,
      };

      const newUser = this.userRepository.create(userDTO);

      await this.userRepository.save(newUser);

      return newUser;

    } catch (error) {

      if (error.code === '23505') {

        throw new ConflictException('E-mail já cadastrado!');
      }

      throw error;
    }
  }

  async findAllUsers(): Promise<Users[]> {

    const users = await this.userRepository.find();

    return users;

  }

  async findOneUser(id: number): Promise<Users> {

    const user = await this.userRepository.findOneBy({
      id: id,
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    return user;

  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {

    const userDTO = {
      firstName: updateUserDto.firstName,
      lastName: updateUserDto.lastName,
      password: updateUserDto.password,
    }

    const user = await this.userRepository.preload({
      id,
      ...userDTO,
    })

    if (!user) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    return this.userRepository.save(user);

  }

  async removeUser(id: number) {

    const user =  await this.userRepository.findOneBy({
      id: id,
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    return this.userRepository.remove(user);

  }
}
