
import { CategoryModel } from "../models/category"

export interface CategoryRepository{
    save(costumer: CategoryModel): Promise<CategoryModel | undefined>
    findById(id: string): Promise<CategoryModel | undefined>
    findall(): Promise<CategoryModel[]| null>
 }