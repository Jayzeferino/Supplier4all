import { Category } from "../../domain/entities/Category"

export interface CategoryRepository{
    save(costumer: Category): Promise<Category | undefined>
    findById(id: string): Promise<Category | undefined>
    findall(): Promise<Category[]| null>
 }