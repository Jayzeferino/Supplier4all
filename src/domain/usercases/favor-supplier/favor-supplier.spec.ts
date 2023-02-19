import InMemoryCategoryRepository from "../../../dataLayer/fakeRepositories/in-memory-category-repository"
import InMemoryCostumerRepository from "../../../dataLayer/fakeRepositories/in-memory-costumer-repository"
import InMemoryFavoritesRepository from "../../../dataLayer/fakeRepositories/in-memory-favorites-repositories"
import InMemorySupplierRepository from "../../../dataLayer/fakeRepositories/in-memory-supplier- repository"
import { CreateCategory } from "../create-category/create-category"
import { CreateCostumer } from "../create-costumer/create-costumer"
import { CreateSupplier } from "../create-supplier/create-supplier"
import { FavorSupplier } from "./favor-supplier"


describe('Favor suppliers', ()=>{
    it('User should be able a favor a supplier', async ()=>{
        const InMemoryCostumerRepositorySpy = new InMemoryCostumerRepository()
        const inMemorySupplierRepositorySpy = new InMemorySupplierRepository()
        const inMemoryFavoritesRepositorySpy = new InMemoryFavoritesRepository()
        const inMemoryCategoryRepositorySpy = new InMemoryCategoryRepository()
        // create a costumer
        const createCostumer = new CreateCostumer(InMemoryCostumerRepositorySpy)
        await createCostumer.execute({
            name: "Joao",
            email: "joao@email.com",
            password: "senhaforte"
        })
        const costumer = await InMemoryCostumerRepositorySpy.costumers[InMemoryCostumerRepositorySpy.costumers.length-1]
        // create a category 
        const category = new CreateCategory(inMemoryCategoryRepositorySpy) 
        const moda= await category.execute({
            name:"MODA"
        })

        // create a  supplier
        const createSupplier = new CreateSupplier(inMemorySupplierRepositorySpy)
        const supplier = await createSupplier.execute({
            name: 'Roupas intimas',
            contact: 62985786897,
            category: moda
        })

        // favor supplier function
        const favorSupplier = new FavorSupplier(inMemoryFavoritesRepositorySpy)
        await favorSupplier.execute({
            supplier: supplier,
            costumer: costumer
        })
        const favorites = inMemoryFavoritesRepositorySpy.favorites
        expect(favorites).toBeTruthy()
      
    })

    
})