import { Category } from "src/@core/domain/entities/Category";
import { CreateCategoryDto } from "src/@core/shared/dtos/category/create-category.dto";
import { CategoryModel } from "../models/category";
import { Mapper } from "src/@core/core/domain/mapper";

export class categoryMapper implements Mapper<CreateCategoryDto ,CategoryModel>{
    
    public mapFrom(data: CreateCategoryDto): CategoryModel{
        const category = new Category({
            name: data.name
        })

        return category
    }

    public mapTo(data: CategoryModel): CreateCategoryDto{
        const category = new CreateCategoryDto()
        category.name = data.props.name

        return category
    }

}