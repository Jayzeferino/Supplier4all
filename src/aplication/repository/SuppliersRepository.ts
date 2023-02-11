import { Supplier } from "../../domain/entities/Supplier";

export interface SuppliersRepository{
   save(supplier: Supplier): Promise<Supplier>
   findById(id: string): Promise<Supplier | null>
}