import { CategoryModel } from "src/@core/dataLayer/models/category"

export class CreateSupplierDto {
    name: string
    contact: string
    email?: string
    eccomerce?: string
    category: string
    instragramUrl?: string
    rate?: number
}
