import { SuppliersRepository } from "../../aplication/repository/SuppliersRepository";
import { Supplier } from "../../domain/entities/Supplier";

export default class InMemorySupplierRepository implements SuppliersRepository {

    public suppliers: Supplier[] = []

    async save(supplier: Supplier): Promise<Supplier | undefined> {
        if(!supplier){
            throw new Error("Not is possible to create a new Supplier")
        }
        this.suppliers.push(supplier);
        return supplier;
        
    }
    async findById(id: string): Promise<Supplier | undefined> {

        const supplier = this.suppliers.find(supplier => supplier.id === id) 
        if (!supplier) {
            throw new Error("Supplier don't exists");
        }
        return supplier
    }

}