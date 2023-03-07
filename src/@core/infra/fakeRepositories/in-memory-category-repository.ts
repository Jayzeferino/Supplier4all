import { CategoryRepository } from "../../dataLayer/repository/CategoryRepository";
import { CategoryModel } from "src/@core/dataLayer/models/category";


export default class InMemoryCategoryRepository implements CategoryRepository {


    public categories: CategoryModel[] = []
    private static _instance: InMemoryCategoryRepository
    
     save(category: CategoryModel): Promise<CategoryModel> {
        
        if(!category){
            throw new Error("Not is possible to create a new Category")
            return;
        }
        
        this.categories.push(category);
        return 
               
    }
    async findById(id: string): Promise<CategoryModel | undefined> {
    
        const category = this.categories.find(categ => categ.id == id) 
        
        if (!category) {
            throw new Error("Category don't exists");
            return;
        }
        return category
    }

   async findall(): Promise<CategoryModel[] | null> {
        return this.categories
   }

   static getInstance() { 
        return this._instance || (this._instance = new this)
   }
}