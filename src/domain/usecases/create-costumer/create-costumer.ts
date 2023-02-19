import { CostumerRepository } from "../../../dataLayer/repository/CostumerRepository"
import { InvalidParameterError } from "../../../utils/errors/invalidParameterError"
import { emailIsValid } from "../../../utils/validations/validations"
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
       
        const validEmail = await emailIsValid(email)

        if(validEmail == false){
            throw new InvalidParameterError("Invalid email")
        }

        const costumer = Costumer.create({
            name,email,phoneNumber,password
        })

        const checkUniqueEmail = await this.costumerRepository.findByEmail(email)
        
        if(checkUniqueEmail != undefined){
            throw new InvalidParameterError("Email aready used")
        }

        await this.costumerRepository.save(costumer)
        
        return costumer
    }
}