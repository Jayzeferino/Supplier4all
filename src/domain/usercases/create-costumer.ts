import { CostumerRepository } from "../../aplication/repository/CostumerRepository"
import { Costumer } from "../entities/Costumer"

type CreateCostumerRequest= {
    name: string
    email: string
    phoneNumber: number
    password: number
    
}

export class CreateCostumer{
    
    public constructor(private supplierRepository: CostumerRepository)
    {}

    async execute({ name,email, phoneNumber, password} : CreateCostumerRequest){
        const costumer = Costumer.create({
            name,email,phoneNumber,password
        })

        const checkUniqueEmail = await this.supplierRepository.findByEmail(email)
        
        if(checkUniqueEmail != undefined){
            throw new Error("Email aready used")
        }

        await this.supplierRepository.save(costumer)
        return costumer
    }
}