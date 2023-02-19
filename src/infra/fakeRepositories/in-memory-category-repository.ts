import { CategoryRepository } from "../../dataLayer/repository/CategoryRepository";
import { Category } from "../../domain/entities/Category";

export default class InMemoryCategoryRepository implements CategoryRepository {

    public categories: Category[] = []

    async save(category: Category): Promise<Category | undefined> {
        
        if(!category){
            throw new Error("Not is possible to create a new Category")
            return;
        }
        
        this.categories.push(category);
        return category;
               
    }
    async findById(id: string): Promise<Category | undefined> {

        const category = this.categories.find(category => category.id === id) 
        if (!category) {
            throw new Error("Category don't exists");
            return;
        }
        return category
    }

   async findall(): Promise<Category[] | null> {
        
       return this.categories
   }


}