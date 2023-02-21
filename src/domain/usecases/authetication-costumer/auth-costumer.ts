import InMemoryCostumerRepository from "../../../infra/fakeRepositories/in-memory-costumer-repository"
import { InvalidParameterError } from "../../../utils/errors/invalidParameterError"
import { MissingParameterError } from "../../../utils/errors/missingParameterError"
import { Encrypter } from "../../helper/encrypter"

export class AuthCostumer{
    public constructor( private readonly inMemoryCostumerRepository : InMemoryCostumerRepository, private readonly encrypter: Encrypter )
    {}
    public async execute(email: string, password: string){

        if(!email){
            throw new MissingParameterError("Missing email")
        }

        if(!password){
            throw new MissingParameterError("Missing password")
        }

        const costumer = await this.inMemoryCostumerRepository.findByEmail(email)
        if (!costumer){
            throw new InvalidParameterError("Email or password passed are wrong")
        }

        const isValid = await this.encrypter.compare(password, costumer.props.password)
        if (!isValid){
            throw new InvalidParameterError("Email or password passed are wrong")
        }
        return costumer

    }
}
