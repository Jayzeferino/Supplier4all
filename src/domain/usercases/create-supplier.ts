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
        const checkUniqueEmail = await this.supplierRepository.findByEmail(email)
        
        if(checkUniqueEmail != undefined){
            throw new Error("Email aready used")
        }
        await this.supplierRepository.save(supplier)
        return supplier
    }
}