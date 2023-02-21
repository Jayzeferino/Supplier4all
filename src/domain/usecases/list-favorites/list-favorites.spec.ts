import InMemoryCategoryRepository from "../../../infra/fakeRepositories/in-memory-category-repository"
import InMemoryCostumerRepository from "../../../infra/fakeRepositories/in-memory-costumer-repository"
import InMemoryFavoritesRepository from "../../../infra/fakeRepositories/in-memory-favorites-repositories"
import InMemorySupplierRepository from "../../../infra/fakeRepositories/in-memory-supplier- repository"
import { CryptoEncrypter } from "../../helper/crypto-encrypter"
import { CreateCategory } from "../create-category/create-category"
import { CreateCostumer } from "../create-costumer/create-costumer"
import { CreateSupplier } from "../create-supplier/create-supplier"
import { FavorSupplier } from "../favor-supplier/favor-supplier"
import { ListFavorites } from "./list-favorites"

describe('List favorites costumer user case', ()=>{
    it('Should return all favorite supplier a costumer', async () => {
        const InMemoryCostumerRepositorySpy = new InMemoryCostumerRepository()
        const inMemorySupplierRepositorySpy = new InMemorySupplierRepository()
        const inMemoryFavoritesRepositorySpy = new InMemoryFavoritesRepository()
        const inMemoryCategoryRepositorySpy = new InMemoryCategoryRepository()
        const encrypter = new CryptoEncrypter()

        // create a costumer
        const createCostumer = new CreateCostumer(InMemoryCostumerRepositorySpy, encrypter)
        await createCostumer.execute({
            name: "Joao",
            email: "joao@email.com",
            password: "senhaforte"
        })
        const joao = await InMemoryCostumerRepositorySpy.costumers[InMemoryCostumerRepositorySpy.costumers.length-1]
        // create a category 
        const category = new CreateCategory(inMemoryCategoryRepositorySpy) 
        const moda= await category.execute({
            name:"MODA"
        })

        // create a  supplier
        const createSupplier = new CreateSupplier(inMemorySupplierRepositorySpy)
        const roupasIntimas = await createSupplier.execute({
            name: 'Roupas intimas',
            contact: 62985786897,
            category: moda
        })

        // favor supplier function
       
        
        const createCostumer2 = new CreateCostumer(InMemoryCostumerRepositorySpy, encrypter)
        await createCostumer2.execute({
            name: "MArio",
            email: "mario@email.com",
            password: "senhafraca"
        })
        const mario = await InMemoryCostumerRepositorySpy.costumers[InMemoryCostumerRepositorySpy.costumers.length-1]
        // create a category 
        const category2 = new CreateCategory(inMemoryCategoryRepositorySpy) 
        const celular= await category2.execute({
            name:"INFORMATICA"
        })

        // create a  supplier
        const createSupplier2 = new CreateSupplier(inMemorySupplierRepositorySpy)
        const Navi = await createSupplier2.execute({
            name: 'Navi',
            contact: 62985786897,
            category: celular
        })

        // favor supplier function
        const favorSupplier2 = new FavorSupplier(inMemoryFavoritesRepositorySpy)
        await favorSupplier2.execute({
            supplier: Navi,
            costumer: joao
        })
        const favorSupplier = new FavorSupplier(inMemoryFavoritesRepositorySpy)
        await favorSupplier.execute({
            supplier: roupasIntimas,
            costumer: joao
        })
        const favorSupplier3 = new FavorSupplier(inMemoryFavoritesRepositorySpy)
        await favorSupplier3.execute({
            supplier: Navi,
            costumer: mario
        })

        const sut = new ListFavorites(inMemoryFavoritesRepositorySpy)
        const favoList = await sut.execute(joao)

        expect(favoList).toBeTruthy()
      })
  })