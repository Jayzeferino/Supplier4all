import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import InMemoryCategoryRepository from '../@core/infra/fakeRepositories/in-memory-category-repository';
import { CreateCategory } from 'src/@core/domain/usecases/create-category/create-category';
import { CategoryRepository } from 'src/@core/dataLayer/repository/CategoryRepository';
import { ListAllCategories } from 'src/@core/domain/usecases/list-all-categories/list-all-categories';

@Module({
  controllers: [CategoryController],
  providers: [
    {
      provide: InMemoryCategoryRepository,
      useClass: InMemoryCategoryRepository
    },
    {
      provide: CreateCategory,
      useFactory: (inMemoryCategoryRepo: CategoryRepository) => {
        return new CreateCategory(inMemoryCategoryRepo)
      },
      inject:[InMemoryCategoryRepository]
    },{
      provide: ListAllCategories,
      useFactory: (inMemoryCategoryRepo: CategoryRepository) => {
        return new ListAllCategories(inMemoryCategoryRepo)
      },
      inject:[InMemoryCategoryRepository]
    },
  ]
})
export class CategoryModule {}
