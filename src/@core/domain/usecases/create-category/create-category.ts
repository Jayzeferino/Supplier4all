import { CategoryRepository } from "../../../dataLayer/repository/CategoryRepository"
import { Category } from "../../entities/Category"

type CreateCategoryRequest = {
    name: string
}

export class CreateCategory{
    
    public constructor(private categoryRepository: CategoryRepository)
    {}

    async execute({name}:CreateCategoryRequest){
       
        const category = Category.create({name})        
        
        await this.categoryRepository.save(category)
        return category
    }
}