import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from '../@core/shared/dtos/supplier/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SuppliersRepository } from 'src/@core/dataLayer/repository/SuppliersRepository';
import { SupplierModel } from 'src/@core/dataLayer/models/supplier';

@Injectable()
export class SuppliersService implements SuppliersRepository {
  save(supplier: SupplierModel): Promise<SupplierModel> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<SupplierModel> {
    throw new Error('Method not implemented.');
  }
  findByCategory(id: string): Promise<SupplierModel[]> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<SupplierModel> {
    throw new Error('Method not implemented.');
  }
  findall(): Promise<SupplierModel[]> {
    throw new Error('Method not implemented.');
  }
}
