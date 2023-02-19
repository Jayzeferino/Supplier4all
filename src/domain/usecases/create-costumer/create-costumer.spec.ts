import InMemoryCostumerRepository from "../../../infra/fakeRepositories/in-memory-costumer-repository"
import { InvalidParameterError } from "../../../utils/errors/invalidParameterError"
import { CreateCostumer } from "./create-costumer"

describe('Create costumer user case', ()=>{
    it('should be able to create a new costumer', async ()=>{

        const inMemoryRepository = new InMemoryCostumerRepository()

        const sut= new CreateCostumer(inMemoryRepository)

        const response = await sut.execute({
            name: 'JOhn DOe',
            email: 'JOhnDoe@gmail.com',
            phoneNumber: '6298687869', 
            password: 'America1998'
        })

        const costumer = inMemoryRepository.costumers[inMemoryRepository.costumers.length-1]
        
        expect(response).toBeTruthy();
        expect(costumer).toHaveProperty('props.name','JOhn DOe');
        expect(costumer).toHaveProperty('props.phoneNumber','6298687869');
        expect(costumer).toHaveProperty('props.email','JOhnDoe@gmail.com');
        expect(costumer).toHaveProperty('props.password','America1998');
        
    })

    it('should not be able to create a costumer with incorret email', async ()=>{

        const inMemoryRepository = new InMemoryCostumerRepository()

        const sut= new CreateCostumer(inMemoryRepository)

        const response = sut.execute({
            name: 'JOhn DOe',
            email: 'JOhnDoe@a',
            password: 'America1998'
        })

        await expect(response).rejects.toThrowError(new InvalidParameterError("Invalid email"))
        
    })

    it('should be able to encrypt a costumer password', async ()=>{

        const inMemoryRepository = new InMemoryCostumerRepository()

        const sut= new CreateCostumer(inMemoryRepository)

        const response = await sut.execute({
            name: 'JOhn DOe',
            email: 'JOhnDoe@gmail.com',
            password: 'America1998'
        })

        const costumer = inMemoryRepository.costumers[inMemoryRepository.costumers.length-1]
        
        expect(response).toBeTruthy();
        
    })
})