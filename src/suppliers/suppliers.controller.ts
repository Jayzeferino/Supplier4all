import { Controller, Get, Post, Body} from '@nestjs/common';
import { CreateSupplierDto } from '../@core/shared/dtos/supplier/create-supplier.dto';
import { CreateSupplier } from 'src/@core/domain/usecases/create-supplier/create-supplier';
import { ListAllSuppliers } from 'src/@core/domain/usecases/list-all-suppliers/list-all-suppliers';
import { SupplierMapper } from '../@core/dataLayer/mappers/supplier-mapper';
import InMemoryCategoryRepository from '../@core/infra/fakeRepositories/in-memory-category-repository';

@Controller('suppliers')
export class SuppliersController {
  // constructor(private readonly suppliersService: SuppliersService) {}
  constructor( private createSupplier: CreateSupplier, private listAllSuppliers: ListAllSuppliers){

  }

  @Post()
  async create(@Body() createSupplierDto: CreateSupplierDto) {
    const mapper = new SupplierMapper()
    const repository = new InMemoryCategoryRepository()
    const supplier = await mapper.mapFrom(createSupplierDto, repository)
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

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.suppliersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSupplierDto: UpdateSupplierDto) {
  //   return this.suppliersService.update(+id, updateSupplierDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.suppliersService.remove(+id);
  // }
}
