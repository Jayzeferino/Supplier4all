import { Entity } from "../../core/domain/entity";

type CostumerProps = {
    name: string,
    email: string,
    phoneNumber?: string,
    password: string,
    paymentStatus?: string,
    paymentDate?: Date,
    paymentdueDate?: Date,
    createdAt?: Date
}

export class Costumer extends Entity<CostumerProps> {
    constructor(props: CostumerProps){
       super(props)
    }

    static create (props: CostumerProps){
        
        const costumer = new Costumer({...props, 
            paymentDate: props.paymentDate ?? new Date(),
            paymentdueDate: props.paymentdueDate ?? new Date(),
            paymentStatus: props.paymentStatus ?? "Active",
            createdAt: props.createdAt ?? new Date()
        })

        return costumer
    }

    public setCostumerState(status: string) {
        this.props.paymentStatus = status
        
    }

    public getCostumerState() {
        return this.props.paymentStatus
    }

}