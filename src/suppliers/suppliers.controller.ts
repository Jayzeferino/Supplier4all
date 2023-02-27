import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { CreateSupplier } from 'src/@core/domain/usecases/create-supplier/create-supplier';
import { ListAllSuppliers } from 'src/@core/domain/usecases/list-all-suppliers/list-all-suppliers';

@Controller('suppliers')
export class SuppliersController {
  // constructor(private readonly suppliersService: SuppliersService) {}
  constructor( private createSupplier: CreateSupplier, private listAllSuppliers: ListAllSuppliers){

  }

  @Post()
  create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.createSupplier.execute(createSupplierDto);
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
