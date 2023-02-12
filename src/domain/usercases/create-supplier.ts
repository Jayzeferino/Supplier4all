import { SuppliersRepository } from "../../aplication/repository/SuppliersRepository"
import { Supplier } from "../entities/Supplier"

type CreateSupplierRequest= {
    name: string
    contact: number
    email: string

}

export class CreateSupplier{
    
    public constructor(private supplierRepository: SuppliersRepository)
    {}

    async execute({ name , contact, email} : CreateSupplierRequest){
        const supplier = Supplier.create({
            name,
            contact,
            email
        })
        await this.supplierRepository.save(supplier)
    
        return supplier
    }
}