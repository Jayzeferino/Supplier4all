
import { CategoryModel } from "../models/category"

export interface CategoryRepository{
    save(category: CategoryModel): Promise<CategoryModel | undefined>
    findById(id: string): Promise<CategoryModel | undefined>
    findall(): Promise<CategoryModel[]| null>
 }