import { CostumerRepository } from "../../../aplication/repository/CostumerRepository"
import { Costumer } from "../../entities/Costumer"

type CreateCostumerRequest= {
    name: string
    email: string
    phoneNumber?: string
    password: string
}

export class CreateCostumer{
    
    public constructor(private costumerRepository: CostumerRepository)
    {}

    async execute({ name,email, phoneNumber, password} : CreateCostumerRequest){
       
        const costumer = Costumer.create({
            name,email,phoneNumber,password
        })

        const checkUniqueEmail = await this.costumerRepository.findByEmail(email)
        
        if(checkUniqueEmail != undefined){
            throw new Error("Email aready used")
        }

        await this.costumerRepository.save(costumer)
        
        return costumer
    }
}