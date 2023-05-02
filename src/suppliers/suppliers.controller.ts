import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { CreateSupplierDto } from '../@core/shared/dtos/supplier/create-supplier.dto';
import { CreateSupplier } from 'src/@core/domain/usecases/create-supplier/create-supplier';
import { ListAllSuppliers } from 'src/@core/domain/usecases/list-all-suppliers/list-all-suppliers';
import { SupplierMapper } from '../@core/dataLayer/mappers/supplier-mapper';
import InMemoryCategoryRepository from '../@core/infra/fakeRepositories/in-memory-category-repository';
import { ListOneSupplier } from 'src/@core/domain/usecases/list-suppliers-by-id/list-one-supplier';
import { ListSupplierByCategory } from 'src/@core/domain/usecases/list-suppliers-by-category/list-supplier-by-category';
import { PrismaService } from 'src/prisma.service';
import { PrismaCategoryRepository } from 'src/@core/infra/RemoteRepositories/PrismaRepositories/prisma-category-repository';
import { categoryMapper } from 'src/@core/dataLayer/mappers/category-mapper';

@Controller('suppliers')
export class SuppliersController {

  constructor( private createSupplier: CreateSupplier, 
    private listAllSuppliers: ListAllSuppliers, 
    private readonly listOne: ListOneSupplier,
     private readonly listByCategory: ListSupplierByCategory,
     private readonly prisma: PrismaService,
     private readonly repo: PrismaCategoryRepository){
      this.repo = new PrismaCategoryRepository(this.prisma)
     }

  @Post(`/create`)
  async create(@Body() createSupplierDto: CreateSupplierDto) {
    const mapper = new SupplierMapper()
    const supplier = await mapper.mapFrom(createSupplierDto, this.repo)
    return this.createSupplier.execute({
      name: supplier.props.name,
      contact: supplier.props.contact,
      category: supplier.props.category, 
      email:supplier.props.email, 
      eccomerce:supplier.props.eccomerce,
      instragramUrl:supplier.props.instragramUrl
      
    });
  }

  @Get()
  findAll() {
    return this.listAllSuppliers.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
  
    return this.listOne.execute({id});
  }

  @Get('/category/:category')
  async listAllSupplierbyCategory(@Param('category') categoryID: string) {
    const mapper = new categoryMapper()
    const category = await mapper.mapFrom({id:categoryID , name:""})
    return this.listByCategory.execute({category})
  }

  

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSupplierDto: UpdateSupplierDto) {
  //   return this.suppliersService.update(+id, updateSupplierDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.suppliersService.remove(+id);
  // }
}
