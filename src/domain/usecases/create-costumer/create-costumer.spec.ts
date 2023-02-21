import InMemoryCostumerRepository from "../../../infra/fakeRepositories/in-memory-costumer-repository"
import { CryptoEncrypter } from "../../../utils/crypto-encrypt/crypto-encrypter"
import { InvalidParameterError } from "../../../utils/errors/invalidParameterError"

import { CreateCostumer } from "./create-costumer"

describe('Create costumer user case', ()=>{
    it('should be able to create a new costumer', async ()=>{

        const inMemoryRepository = new InMemoryCostumerRepository()
        const encrypter = new CryptoEncrypter()

        const sut= new CreateCostumer(inMemoryRepository, encrypter)


        const response = await sut.execute({
            name: 'JOhn DOe',
            email: 'JOhnDoe@gmail.com',
            phoneNumber: '6298687869', 
            password: 'America1998'
        })

        const costumer = inMemoryRepository.costumers[inMemoryRepository.costumers.length-1]
        
        expect(costumer).toBeTruthy();
        
    })

    it('should not be able to create a costumer with incorret email', async ()=>{

        const inMemoryRepository = new InMemoryCostumerRepository()
        const encrypter = new CryptoEncrypter()

        const sut= new CreateCostumer(inMemoryRepository, encrypter)

        const response = sut.execute({
            name: 'JOhn DOe',
            email: 'JOhnDoe@a',
            password: 'any_password'
        })

        await expect(response).rejects.toThrowError(new InvalidParameterError("Invalid email"))
        
    })

    it('should be able to encrypt a costumer password', async ()=>{

        const inMemoryRepository = new InMemoryCostumerRepository()
        const encrypter = new CryptoEncrypter()

        const sut= new CreateCostumer(inMemoryRepository, encrypter)

        const response = await sut.execute({
            name: 'JOhn DOe',
            email: 'JOhnDoe@gmail.com',
            password: 'any_password'
        })

        const costumer = inMemoryRepository.costumers[inMemoryRepository.costumers.length-1]
        
        expect(costumer.props.password).not.toBe("response.props.password")
        
    })
})