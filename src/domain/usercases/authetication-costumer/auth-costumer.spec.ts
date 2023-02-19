import InMemoryCostumerRepository from "../../../dataLayer/fakeRepositories/in-memory-costumer-repository"
import { InvalidParameterError } from "../../../utils/errors/invalidParameterError"
import { Costumer } from "../../entities/Costumer"
import { CreateCostumer } from "../create-costumer/create-costumer"

export class AuthCostumer{
    public constructor( private readonly inMemoryCostumerRepository : InMemoryCostumerRepository )
    {}
    public async execute(email: string, password: string){
        const costumer = await this.inMemoryCostumerRepository.findByEmail(email)
        if (!costumer){
            throw new InvalidParameterError("Email or password passed are wrong")
        }
        if(costumer.props.password != password){
            throw new InvalidParameterError("Email or password passed are wrong")
        }
        return costumer

    }
}

type SutTypes={
    sut: AuthCostumer,
    costumerRepository: InMemoryCostumerRepository
    costumer: Costumer
}
const makeSut=  async (): Promise<SutTypes> => {
    
    const costumerRepository = new InMemoryCostumerRepository()
    const newCostumer = new CreateCostumer(costumerRepository)
    const costumer = await newCostumer.execute({
        name: "JohnDoe",
        email: "johndoe@gmail.com",
        password: "33183321"
    })
    const sut = new AuthCostumer(costumerRepository)
    
    return { sut , costumerRepository, costumer }

}

describe('Authentication costumer user case', ()=>{
    it('should be able to get costumer by email', async ()=>{

        const { sut , costumerRepository , costumer } =  await makeSut()
        const response = await sut.execute("johndoe@gmail.com", "33183321")
        expect(response.id).toBe(costumer.id)
                
    })
    it('should throw if password or email are wrong', async ()=>{

        const { sut , costumerRepository , costumer} =  await makeSut()
        const response = sut.execute("johndoe@gmail.com","33183322")
        await expect(response).rejects.toThrowError(new InvalidParameterError("Email or password passed are wrong"))
    })
})