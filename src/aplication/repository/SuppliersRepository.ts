import { Supplier } from "../../domain/entities/Supplier";

export interface SuppliersRepository{
   save(supplier: Supplier): Promise<Supplier | undefined>
   findById(id: string): Promise<Supplier | undefined>
}