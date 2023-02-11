import { Entity } from "../../core/domain/entity";
import { Supplier } from "./Supplier";

enum Status {
    active= "Active",
    inDebit="In Debit",
    blocked="Blocked"
}

type CostumerProps = {
    name: string
    email: string
    phoneNumber: number
    password: number
    paymentStatus: Status
    paymentDate: Date
    paymentdueDate: Date
    favoriteSuppliers: Supplier[]

}

export class Costumer extends Entity<CostumerProps> {
     private constructor(props: CostumerProps){
        super(props)
     }

     static create (props: CostumerProps){
        const costumer = new Costumer(props)
         return costumer
     }
}