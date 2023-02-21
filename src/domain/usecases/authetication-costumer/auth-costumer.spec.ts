import InMemoryCostumerRepository from "../../../infra/fakeRepositories/in-memory-costumer-repository"
import { InvalidParameterError } from "../../../utils/errors/invalidParameterError"
import { MissingParameterError } from "../../../utils/errors/missingParameterError"
import { Costumer } from "../../entities/Costumer"
import { Encrypter } from "../../helper/encrypter"
import { CreateCostumer } from "../create-costumer/create-costumer"
import { AuthCostumer } from "./auth-costumer"
import { CryptoEncrypter } from "../../helper/crypto-encrypter"


type SutTypes={
    sut: AuthCostumer,
    costumerRepository: InMemoryCostumerRepository
    costumer: Costumer
    encrypter: CryptoEncrypter
}
const makeSut=  async (): Promise<SutTypes> => {
    
    const costumerRepository = new InMemoryCostumerRepository()
    const encrypter = new CryptoEncrypter()
    const newCostumer = new CreateCostumer(costumerRepository,encrypter)
    const costumer = await newCostumer.execute({
        name: "JohnDoe",
        email: "johndoe@gmail.com",
        password: "any_password"
    })
    const sut = new AuthCostumer(costumerRepository, encrypter)
    
    return { sut , costumerRepository, costumer , encrypter}

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

        const { sut , costumerRepository , costumer, encrypter} =  await makeSut()
        const response = await sut.execute("johndoe@gmail.com","any_password")
        expect( encrypter.password).toBe(response.props.password)
    })
    
})