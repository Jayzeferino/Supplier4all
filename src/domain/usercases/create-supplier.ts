import { SuppliersRepository } from "../../aplication/repository/SuppliersRepository"
import { Supplier } from "../entities/Supplier"

type CreateSupplierRequest= {
    name: string
    contact: number

}

class CreateSupplier{
    
    private constructor(private supplierRepository: SuppliersRepository)
    {}

    async execute({ name , contact} : CreateSupplierRequest){
        const supplier = Supplier.create({
            name,
            contact
        })
        this.supplierRepository.save(supplier)
        return supplier
    }
}