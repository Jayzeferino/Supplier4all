import { CategoryRepository } from "src/@core/dataLayer/repository/CategoryRepository"

export class ListAllCategories{
    
    public constructor(private categoryRepository: CategoryRepository)
    {}
    async execute(){
          
        const categories = await this.categoryRepository.findall()
        if (!categories){
            throw new Error("don't exists suppliers");
        }
      return categories
    }
}