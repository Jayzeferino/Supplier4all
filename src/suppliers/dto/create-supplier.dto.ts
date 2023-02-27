import { Category }from "../../@core/domain/entities/Category"

export class CreateSupplierDto {
    name: string
    contact: number
    email?: string
    eccomerce?: string
    category: Category
    instragramUrl?: string
}
