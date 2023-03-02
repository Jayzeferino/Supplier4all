import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';
import InMemorySupplierRepository from '../@core/infra/fakeRepositories/in-memory-supplier- repository';
import { CreateSupplier } from '../@core/domain/usecases/create-supplier/create-supplier';
import { SuppliersRepository } from '../@core/dataLayer/repository/SuppliersRepository';
import { ListAllSuppliers } from '../@core/domain/usecases/list-all-suppliers/list-all-suppliers';

describe('SuppliersController', () => {
  let controller: SuppliersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuppliersController],
      providers: [SuppliersService,
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
    }).compile();

    controller = module.get<SuppliersController>(SuppliersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
