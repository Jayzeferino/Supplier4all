import { SuppliersRepository } from "../../../aplication/repository/SuppliersRepository";


type ListOneSupplierRequest= {
    id: string

}


export class ListOneSupplier {
    public constructor(private supplierRepository: SuppliersRepository)
    {}
     async execute({id}:ListOneSupplierRequest){
        const supplier = await this.supplierRepository.findById(id)

        if (!supplier){
            throw new Error("this supplier don't exists");
        }
        return supplier
    }
}