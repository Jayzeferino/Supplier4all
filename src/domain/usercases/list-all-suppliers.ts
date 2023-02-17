import { SuppliersRepository } from "../../aplication/repository/SuppliersRepository"

export class ListAllSuppliers {
    public constructor(private supplierRepository: SuppliersRepository)
    {}
     async execute(){
        const suppliers = await this.supplierRepository.findall()
        if (!suppliers){
            throw new Error("dont exists suppliers to show");
        }
        return suppliers
    }
}