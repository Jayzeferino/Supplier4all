import InMemoryCategoryRepository from "../../../infra/fakeRepositories/in-memory-category-repository"
import { CreateCategory } from "./create-category"

describe('Create category user case', ()=>{
    it('should be able to create a new category', async ()=>{
        const inMemoryRepository = new InMemoryCategoryRepository()

        const sut= new CreateCategory(inMemoryRepository)

        const response = await sut.execute({
            name: 'ROUPAS EVANGELICAS',
        })

        const category = inMemoryRepository.categories[inMemoryRepository.categories.length-1]
        console.log(category)
        expect(category.id).toBeTruthy()
    
      
    })
})