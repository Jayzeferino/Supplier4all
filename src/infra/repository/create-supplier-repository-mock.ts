import { SuppliersRepository } from "../../aplication/repository/SuppliersRepository";
import { Supplier } from "../../domain/entities/Supplier";

export class CreateSupplierRepositoryMock implements SuppliersRepository {
    save(supplier: Supplier): Promise<Supplier> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Supplier | null> {
        throw new Error("Method not implemented.");
    }

}