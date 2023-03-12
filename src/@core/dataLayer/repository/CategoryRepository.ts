
import { CreateCategoryDto } from "src/@core/shared/dtos/category/create-category.dto"
import { CategoryModel } from "../models/category"

export interface CategoryRepository{
    save(category: CategoryModel): Promise<CategoryModel | undefined>
    findById(id: string): Promise<any>
    findall(): Promise<CategoryModel[]| null>
 }