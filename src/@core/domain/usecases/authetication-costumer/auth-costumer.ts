import { UpdateAccessTokenRepository } from "../../../dataLayer/repository/UpdateAccessTokenRepository"
import InMemoryCostumerRepository from "../../../infra/fakeRepositories/in-memory-costumer-repository"
import { InvalidParameterError } from "../../../utils/errors/invalidParameterError"
import { MissingParameterError } from "../../../utils/errors/missingParameterError"
import { Encrypter } from "../../helper/encrypter"
import { TokenGenerator } from "../../helper/token-generator"

export class AuthCostumer{
    public constructor( private readonly inMemoryCostumerRepository : InMemoryCostumerRepository, 
        private readonly updateAcessTokenRepository: UpdateAccessTokenRepository, 
        private readonly encrypter: Encrypter,
        private readonly tokenGenerator: TokenGenerator )
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
        
        const accessToken = await this.tokenGenerator.generate(costumer.id)
        if(!accessToken){
            throw new MissingParameterError("access token is undefined")
        }
        await this.updateAcessTokenRepository.update(costumer.id, accessToken)

        return accessToken

    }
}
