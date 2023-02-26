import { SuppliersRepository } from "../../../dataLayer/repository/SuppliersRepository"
import { Category } from "../../entities/Category"


type ListSupplierByCategoryRequest = {
    category: Category
}

export class ListSupplierByCategory {
    public constructor(private supplierRepository: SuppliersRepository)
    {}
     async execute({category}:ListSupplierByCategoryRequest){
        const supplier = await this.supplierRepository.findByCategory(category.props.name)
        

        return supplier
    }
}