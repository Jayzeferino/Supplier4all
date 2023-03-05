import InMemoryCategoryRepository from "../../../infra/fakeRepositories/in-memory-category-repository"
import { CreateCategory } from "../create-category/create-category"
import { ListAllCategories } from "./list-all-categories"



describe('List Supplier User Case', ()=>{
    it('should be able list all suppliers', async ()=>{

        const inMemoryCategoryRepo = new InMemoryCategoryRepository()
        const category = new CreateCategory(inMemoryCategoryRepo)
        const Acessorios = await category.execute({
            name:"Acessorios para Celular"
        })
        const Moda = await category.execute({
            name:"Moda"
        })

        
        const sut = new ListAllCategories(inMemoryCategoryRepo)

        const categories = await sut.execute()
        console.log(categories)
        expect(categories).toBeTruthy()

    })
})