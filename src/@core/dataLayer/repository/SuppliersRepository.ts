import { SupplierModel } from "../models/supplier";

export interface SuppliersRepository{
   save(supplier: SupplierModel): Promise<SupplierModel | undefined>
   findById(id: string): Promise<SupplierModel | undefined>
   findByCategory(id: string): Promise<SupplierModel[] | undefined>
   findByEmail(email: string): Promise<SupplierModel | undefined>
   findall(): Promise<SupplierModel[]| null>
}