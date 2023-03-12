import { CreateSupplierDto } from "../../shared/dtos/supplier/create-supplier.dto"
import { SupplierModel } from "../models/supplier"
import { CategoryRepository } from "../repository/CategoryRepository"
import { categoryMapper } from "./category-mapper"



export class SupplierMapper{
    
    public async mapFrom(data: CreateSupplierDto, categoryRepo?: CategoryRepository): Promise<SupplierModel>{
        const categorydto = await categoryRepo.findById(data.category)
        const mapper = new categoryMapper()
        const category= mapper.mapFrom(categorydto)
        const supplier = new SupplierModel({
            name: data.name,
            contact: parseInt(data.contact),
            email: data.email,
            eccomerce: data.eccomerce,
            category: category,
            instragramUrl: data.instragramUrl,
        })

        return supplier
    }

    public mapTo(data: SupplierModel): CreateSupplierDto{
        const supplier = new CreateSupplierDto()
       
        supplier.name = data.props.name
        supplier.contact= data.props.contact.toString()
        supplier.email= data.props.email
        supplier.eccomerce= data.props.eccomerce
        supplier.category= data.props.category.id
        supplier.instragramUrl= data.props.instragramUrl
        supplier.rate = data.props.rate

        return supplier
    }

}