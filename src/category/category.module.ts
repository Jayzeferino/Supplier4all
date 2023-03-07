import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CreateCategory } from 'src/@core/domain/usecases/create-category/create-category';
import { CategoryRepository } from 'src/@core/dataLayer/repository/CategoryRepository';
import { ListAllCategories } from 'src/@core/domain/usecases/list-all-categories/list-all-categories';
import { PrismaCategoryRepository } from 'src/@core/infra/RemoteRepositories/PrismaRepositories/prisma-category-repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CategoryController],
  providers: [PrismaService,

    {
      provide: PrismaCategoryRepository,
      useFactory: (prisma: PrismaService)=>{
        return new PrismaCategoryRepository(prisma)
      },
      inject:[PrismaService]
    },
    {
      provide: CreateCategory,
      useFactory: (CategoryRepository: CategoryRepository) => {
        return new CreateCategory(CategoryRepository)
      },
      inject:[PrismaCategoryRepository]
    },{
      provide: ListAllCategories,
      useFactory: (CategoryRepository: CategoryRepository) => {
        return new ListAllCategories(CategoryRepository)
      },
      inject:[PrismaCategoryRepository]
    },
  ]
})
export class CategoryModule {}
