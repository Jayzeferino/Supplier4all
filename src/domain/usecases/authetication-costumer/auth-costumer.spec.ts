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

type SutTypes={
    sut: AuthCostumer,
    costumerRepository: InMemoryCostumerRepository
    costumer: Costumer
    encrypter: CryptoEncrypter
    tokenGen: TokenGeneratorSpy
}
const makeSut=  async (): Promise<SutTypes> => {
    
    const costumerRepository = new InMemoryCostumerRepository()
    const encrypter = new CryptoEncrypter()
    const tokenGen = new TokenGeneratorSpy()
    tokenGen.accessToken = 'any_token'
    const newCostumer = new CreateCostumer(costumerRepository,encrypter)
    const costumer = await newCostumer.execute({
        name: "JohnDoe",
        email: "johndoe@gmail.com",
        password: "any_password"
    })
    const sut = new AuthCostumer(costumerRepository, encrypter, tokenGen)
    
    return { sut , costumerRepository, costumer , encrypter, tokenGen}

}
 
describe('Authentication costumer user case', ()=>{

    it('should throw if email is empty', async ()=>{

        const { sut , costumerRepository , costumer } =  await makeSut()
        const response = sut.execute("", "any_password")
        await expect(response).rejects.toThrow( new MissingParameterError("Missing email"))
                
    })

    it('should be able to get costumer by email', async ()=>{

        const { sut , costumerRepository , costumer } =  await makeSut()
        const response = await sut.execute("johndoe@gmail.com", "any_password")
        expect(response.id).toBe(costumer.id)
                
    })
    it('should be albe to a compare a password', async ()=>{

        const { sut , costumerRepository , costumer} =  await makeSut()
        const response = await sut.execute("johndoe@gmail.com","any_password")
        expect(response).toBe(costumer)
    })
    it('should throw if password or email are wrong', async ()=>{

        const { sut , costumerRepository , costumer, encrypter} =  await makeSut()
        const response = sut.execute("johndoe@gmail.com","wrong_password")
        await expect(response).rejects.toThrowError(new InvalidParameterError("Email or password passed are wrong"))
    })

    it('should call Encrypter with correct values', async ()=>{

        const { sut , encrypter} =  await makeSut()
        const response = await sut.execute("johndoe@gmail.com","any_password")
        expect( encrypter.password).toBe(response.props.password)
    })

    it('should call TokenGeneretor with corret values', async ()=>{

        const { sut , encrypter, tokenGen} =  await makeSut()
        const response = await sut.execute("johndoe@gmail.com","any_password")
        expect( tokenGen.costumerId).toBe(response.id)
    })
    
})