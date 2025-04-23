import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './entities/category.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Categories)
    private categoryRepository: Repository<Categories>,
    private readonly userService: UserService,
  ) { }


  async createCategory(createCategoryDto: CreateCategoryDto) {

    const { userId } = createCategoryDto;

    try {
      const user = await this.userService.findOneUser(userId);

      if (!user) {
        throw new NotFoundException('Usuário não encontrado!');
      }

      const createCategoryDTO = {
        user,
        ...createCategoryDto,
      }

      const category = this.categoryRepository.create(createCategoryDTO);

      const createdCategory = await this.categoryRepository.save(category);

      return createdCategory;
    } catch (error) {
      throw error;
    }
  }

  async findAllCategories() {

    const categories = await this.categoryRepository.find();

    return categories;

  }

  async findOneCategory(id: number) {
    
    const category = await this.categoryRepository.findOneBy({
      id: id,
    });

    if(!category) {
      throw new NotFoundException('Categoria não encontrada!');
    }

    return category;

  }

  async findUserCategories(id: number) {
      
      const user = await this.userService.findOneUser(id);
  
      if(!user) {
        throw new NotFoundException('Usuário não encontrado!');
      }
  
      const categories = await this.categoryRepository.findBy({
        user: {
          id: id,
        }
      });
  
      return categories;
    }


  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    
    const category = await this.categoryRepository.preload({
      id,
      ...updateCategoryDto,
    });

    if(!category) {
      throw new NotFoundException('Categoria não encontrada!');
    }

    return this.categoryRepository.save(category);

  }

  async removeCategory(id: number){

    const category = await this.findOneCategory(id);

    if(!category) {
      throw new NotFoundException('Categoria não encontrada!');
    }

    return this.categoryRepository.remove(category);
    
  }
}
