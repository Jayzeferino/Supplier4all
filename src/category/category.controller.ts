import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { CreateCategoryDto } from '../@core/shared/dtos/category/create-category.dto';
// import { UpdateCategoryDto } from './dto/update-category.dto';
import { categoryMapper } from '../@core/dataLayer/mappers/category-mapper';
import { CreateCategory } from '../@core/domain/usecases/create-category/create-category';
import { ListAllCategories } from 'src/@core/domain/usecases/list-all-categories/list-all-categories';

@Controller('categories')
export class CategoryController {
  constructor(private createCategory: CreateCategory, private listAllCategories: ListAllCategories) {}

  @Post('/create')
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const mapper = new categoryMapper()
    const category = mapper.mapFrom(createCategoryDto)
    return await this.createCategory.execute(category.props)
  
  }

  @Get()
  findAll( ) {
    return this.listAllCategories.execute()
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.categoryService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
  //   return this.categoryService.update(+id, updateCategoryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.categoryService.remove(+id);
  // }
}
