import { Entity } from "../../core/domain/entity";
import { Supplier } from "./Supplier";

enum Status {
    active= "Active",
    inDebit="In Debit",
    blocked="Blocked"
}

type  CostumerProps = {
    name: string,
    email: string,
    phoneNumber: number,
    password: number,
    paymentStatus?: Status,
    paymentDate?: Date,
    paymentdueDate?: Date,
}



export class Costumer extends Entity<CostumerProps> {
    private constructor(props: CostumerProps){
       super(props)
    }

    static create (props: CostumerProps){
        const costumer = new Costumer({...props, 
            paymentDate: props.paymentDate ?? new Date(),
            paymentdueDate: props.paymentdueDate ?? new Date(),
            paymentStatus: props.paymentStatus ?? Status.active
        })

        return costumer
    }

    public setCostumerState(status: Status) {
        this.props.paymentStatus = status
        
    }

    public getCostumerState() {
        return this.props.paymentStatus
    }
}