import { Module } from '@nestjs/common';
// import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import InMemorySupplierRepository from 'src/@core/infra/fakeRepositories/in-memory-supplier- repository';
import { CreateSupplier } from 'src/@core/domain/usecases/create-supplier/create-supplier';
import { SuppliersRepository } from 'src/@core/dataLayer/repository/SuppliersRepository';
import { ListAllSuppliers } from 'src/@core/domain/usecases/list-all-suppliers/list-all-suppliers';

@Module({
  controllers: [SuppliersController],
  providers: [
  {
    provide: InMemorySupplierRepository,
    useClass: InMemorySupplierRepository
  },
  {
    provide: CreateSupplier,
    useFactory: (supplierRepository: SuppliersRepository) => {
      return new CreateSupplier(supplierRepository)
    },
    inject:[InMemorySupplierRepository]
  },
  {
    provide: ListAllSuppliers,
    useFactory: (supplierRepository: SuppliersRepository) => {
      return new ListAllSuppliers(supplierRepository)
    },
    inject:[InMemorySupplierRepository]
  }
  ]
})
export class SuppliersModule {}
