import { Supplier } from "../../domain/entities/Supplier";

export interface SuppliersRepository{
   save(supplier: Supplier): Promise<Supplier | undefined>
   findById(id: string): Promise<Supplier | undefined>
   findByCategory(id: string): Promise<Supplier[] | undefined>
   findByEmail(email: string): Promise<Supplier | undefined>
   findall(): Promise<Supplier[]| null>
}