import { Module } from '@nestjs/common';
// import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import InMemorySupplierRepository from 'src/@core/infra/fakeRepositories/in-memory-supplier- repository';
import { CreateSupplier } from 'src/@core/domain/usecases/create-supplier/create-supplier';
import { SuppliersRepository } from 'src/@core/dataLayer/repository/SuppliersRepository';
import { ListAllSuppliers } from 'src/@core/domain/usecases/list-all-suppliers/list-all-suppliers';
import { PrismaService } from 'src/prisma.service';
import { PrismaSupplierRepository } from 'src/@core/infra/RemoteRepositories/PrismaRepositories/prisma-supplier-repositories';
import { ListSupplierByCategory } from 'src/@core/domain/usecases/list-suppliers-by-category/list-supplier-by-category';
import { ListOneSupplier } from 'src/@core/domain/usecases/list-suppliers-by-id/list-one-supplier';
import { PrismaCategoryRepository } from 'src/@core/infra/RemoteRepositories/PrismaRepositories/prisma-category-repository';

@Module({
  controllers: [SuppliersController],
  providers: [PrismaService,
    {
      provide: PrismaCategoryRepository,
      useClass: PrismaCategoryRepository
    },
    {
      provide: InMemorySupplierRepository,
      useClass: InMemorySupplierRepository
    },
    {
    provide: PrismaSupplierRepository,
      useFactory: (prisma: PrismaService)=>{
        return new PrismaSupplierRepository(prisma)
      },
      inject:[PrismaService]
    },
    {
      provide: CreateSupplier,
      useFactory: (supplierRepository: SuppliersRepository) => {
        return new CreateSupplier(supplierRepository)
      },
      inject:[PrismaSupplierRepository, PrismaCategoryRepository]
    },
    {
      provide: ListAllSuppliers,
      useFactory: (supplierRepository: SuppliersRepository) => {
        return new ListAllSuppliers(supplierRepository)
      },
      inject:[PrismaSupplierRepository]
    },

    {
      provide: ListSupplierByCategory,
      useFactory: (supplierRepository: SuppliersRepository) => {
        return new ListSupplierByCategory(supplierRepository)
      },
      inject:[PrismaSupplierRepository]
    },
    {
      provide: ListOneSupplier,
      useFactory: (supplierRepository: SuppliersRepository) => {
        return new ListOneSupplier(supplierRepository)
      },
      inject:[PrismaSupplierRepository]
    }]
})
export class SuppliersModule {}
