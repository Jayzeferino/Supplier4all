import { CategoryModel } from "src/@core/dataLayer/models/category"

export class CreateSupplierDto {
    name: string
    contact: number
    email?: string
    eccomerce?: string
    category: string
    instragramUrl?: string
    rate?: number
}
