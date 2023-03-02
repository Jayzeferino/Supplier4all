import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplierDto } from '../../@core/shared/dtos/supplier/create-supplier.dto';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {}
