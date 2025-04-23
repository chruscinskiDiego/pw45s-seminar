import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AddHeaderInterceptor } from 'src/common/interceptors/add-header.interceptor';
import { TimingConnectionInterceptor } from 'src/common/interceptors/timing-connection.interceptor';
import { ErrorHandlingInterceptor } from 'src/common/interceptors/error-handling.interceptor';
import { SimpleCacheInterceptor } from 'src/common/interceptors/simple-cache.interceptor';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('category')
@ApiTags('CRUD de Categorias')
//@UseInterceptors(AddHeaderInterceptor) para a classe toda
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @ApiBody({type: CreateCategoryDto})
  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.createCategory(createCategoryDto);
  }

  @Get('/all')
  @UseInterceptors(AddHeaderInterceptor) // para o endpoint
  async findAllCategories() {
    return await this.categoryService.findAllCategories();

  }

  @Get(':id')
  @UseInterceptors(TimingConnectionInterceptor, ErrorHandlingInterceptor, SimpleCacheInterceptor)
  async findOneCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.findOneCategory(id);
  }

  @Get('/user/:id')
  async getUserCategories(@Param('id', ParseIntPipe) id: number) {
    return await this.categoryService.findUserCategories(id);
  }

  @ApiBody({type: CreateCategoryDto})
  @Patch(':id')
  async updateCategory(@Param('id', ParseIntPipe) id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.updateCategory(id, updateCategoryDto);
  }

  @Delete(':id')
  removeCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.removeCategory(id);
  }
}
