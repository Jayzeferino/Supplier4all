import { Entity } from "../../core/domain/entity";

type SupplierProps = {
    name: string
    contact: number
    email?: string
    eccomerce?: string
    category?: string
    instragramUrl?: string
    rate?: number
    createAt?: Date
}

export class Supplier extends Entity<SupplierProps> {
    
     private constructor(props: SupplierProps){
        super(props)
     }

     static create (props: SupplierProps){
        const supplier = new Supplier({...props, 
        createAt: props.createAt ?? new Date()
    })
         return supplier
     }
}