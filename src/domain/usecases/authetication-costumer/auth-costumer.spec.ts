import { UpdateAccessTokenRepository } from "../../../dataLayer/repository/UpdateAccessTokenRepository"
import InMemoryCostumerRepository from "../../../infra/fakeRepositories/in-memory-costumer-repository"
import { CryptoEncrypter } from "../../../utils/crypto-encrypt/crypto-encrypter"
import { InvalidParameterError } from "../../../utils/errors/invalidParameterError"
import { MissingParameterError } from "../../../utils/errors/missingParameterError"
import { Costumer } from "../../entities/Costumer"
import { Encrypter } from "../../helper/encrypter"
import { TokenGenerator } from "../../helper/token-generator"
import { CreateCostumer } from "../create-costumer/create-costumer"
import { AuthCostumer } from "./auth-costumer"

class TokenGeneratorSpy implements TokenGenerator{
    public costumerId : string = ''
    public accessToken: string = ''
    async generate(costumerId: string): Promise<string | undefined> {
        this.costumerId = costumerId
        return this.accessToken
    }

}
export type updateAccessTokenProps= {
    costumer_id: string,
    accessToken: string 
}
class UpdateAccessTokenRepositorySpy implements UpdateAccessTokenRepository{
    public updatedAcessTokens: updateAccessTokenProps[]=[]
    async update(costumer_id: string, accessToken: string): Promise<void> {
        const tokenCostumer :updateAccessTokenProps = {
            costumer_id: costumer_id,
            accessToken: accessToken
        }
        await this.updatedAcessTokens.push(tokenCostumer)
    }

}

type SutTypes={
    sut: AuthCostumer,
    costumerRepository: InMemoryCostumerRepository
    costumer: Costumer
    encrypter: CryptoEncrypter
    tokenGen: TokenGeneratorSpy
    updateTokenRepo: UpdateAccessTokenRepositorySpy
}
const makeSut=  async (): Promise<SutTypes> => {
    
    const costumerRepository = new InMemoryCostumerRepository()
    const encrypter = new CryptoEncrypter()
    const tokenGen = new TokenGeneratorSpy()
    const tokenUpdateRepositorySpy = new UpdateAccessTokenRepositorySpy()
    tokenGen.accessToken = 'any_token'
    const newCostumer = new CreateCostumer(costumerRepository,encrypter)
    const costumer = await newCostumer.execute({
        name: "JohnDoe",
        email: "johndoe@gmail.com",
        password: "any_password"
    })
    const sut = new AuthCostumer(
        costumerRepository, tokenUpdateRepositorySpy,  encrypter, tokenGen)
    
    return { sut , costumerRepository, costumer , encrypter, tokenGen, updateTokenRepo: tokenUpdateRepositorySpy}

}
 
describe('Authentication costumer user case', ()=>{

    it('should throw if email is empty', async ()=>{

        const { sut } =  await makeSut()
        const response = sut.execute("", "any_password")
        await expect(response).rejects.toThrow( new MissingParameterError("Missing email"))
                
    })

    it('should throw a error if not get costumer by email', async ()=>{

        const { sut } =  await makeSut()
        const response = sut.execute("johndoe@gail.com", "any_password")
        await expect(response).rejects.toThrow(new InvalidParameterError("Email or password passed are wrong"))
                
    })
    it('should throw error if a compared passwords are wrong', async ()=>{

        const { sut } =  await makeSut()
        const response = sut.execute("johndoe@gmail.com","wong_password")
        await expect(response).rejects.toThrowError(new InvalidParameterError("Email or password passed are wrong"))

    })
    it('should throw if password or email are wrong', async ()=>{

        const { sut } =  await makeSut()
        const response = sut.execute("johndoe@gmail.com","wrong_password")
        await expect(response).rejects.toThrowError(new InvalidParameterError("Email or password passed are wrong"))
    })

    it('should call Encrypter with correct values', async ()=>{

        const { sut , encrypter ,costumer} =  await makeSut()
        const response = await sut.execute("johndoe@gmail.com","any_password")
        expect( encrypter.password).toBe(costumer.props.password)
    })

    it('should call TokenGeneretor with corret values', async ()=>{

        const { sut , costumer, tokenGen} =  await makeSut()
        const response = await sut.execute("johndoe@gmail.com","any_password")
        expect( tokenGen.costumerId).toBe(costumer.id)
    })

    it('should return an access token to cosumer with correct credencials are provided', async ()=>{

        const { sut, tokenGen} =  await makeSut()
        const response = await sut.execute("johndoe@gmail.com","any_password")
        expect(response).toBe(tokenGen.accessToken)
        expect(response).toBeTruthy()
    })
    
    it('should be able a update a costumer access token', async ()=>{

        const { sut, tokenGen, costumer,updateTokenRepo} =  await makeSut()
        const response = await sut.execute("johndoe@gmail.com","any_password")
        updateTokenRepo.update(costumer.id,response)
        expect(response).toBeTruthy()
        expect(updateTokenRepo.updatedAcessTokens[updateTokenRepo.updatedAcessTokens.length-1].accessToken).toBe(response)
    })
    
})