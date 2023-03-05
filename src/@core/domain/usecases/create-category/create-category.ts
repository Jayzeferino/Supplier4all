import { CategoryRepository } from "../../../dataLayer/repository/CategoryRepository"
import { Category } from "../../entities/Category"

type CreateCategoryRequest = {
    name: string
}

export class CreateCategory{
    
    public constructor(private categoryRepository: CategoryRepository)
    {}

    async execute(createCategory:CreateCategoryRequest){
       
        const category = Category.create(createCategory)        
        
        await this.categoryRepository.save(category)
        
        return category
    }
}