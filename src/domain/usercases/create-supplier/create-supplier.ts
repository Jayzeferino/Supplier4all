import { SuppliersRepository } from "../../../aplication/repository/SuppliersRepository"
import { Category } from "../../entities/Category"
import { Supplier } from "../../entities/Supplier"

type CreateSupplierRequest= {
    name: string
    contact: number
    email?: string
    eccomerce?: string
    category: Category
    instragramUrl?: string
}

export class CreateSupplier{
    
    public constructor(private supplierRepository: SuppliersRepository)
    {}

    async execute({ name , contact, email , eccomerce , category , instragramUrl} : CreateSupplierRequest){
        const supplier = Supplier.create({
            name,
            contact,
            email, 
            eccomerce,
            category,
            instragramUrl
        })

        if (email==undefined) {
            await this.supplierRepository.save(supplier)
            return supplier
        }
        const checkUniqueEmail = await this.supplierRepository.findByEmail(email)
        
        if(checkUniqueEmail != undefined){
            throw new Error("Email aready used")
        }
        await this.supplierRepository.save(supplier)
        return supplier
    }
}