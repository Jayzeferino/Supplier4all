import InMemoryCategoryRepository from "../../../dataLayer/fakeRepositories/in-memory-category-repository"
import InMemorySupplierRepository from "../../../dataLayer/fakeRepositories/in-memory-supplier- repository"
import { CreateCategory } from "../create-category/create-category"
import { CreateSupplier } from "../create-supplier/create-supplier"
import { ListAllSuppliers } from "./list-all-suppliers"


describe('List Supplier User Case', ()=>{
    it('should be able list all suppliers', async ()=>{

        const inMemoryRepository = new InMemorySupplierRepository()
        const inMemoryCategoryRepo = new InMemoryCategoryRepository()
        const category = new CreateCategory(inMemoryCategoryRepo)
        const Acessorios = await category.execute({
            name:"Acessorios para Celular"
        })
        const Moda = await category.execute({
            name:"Moda"
        })

        const createSupplier = new CreateSupplier(inMemoryRepository)
        await createSupplier.execute({
            name: 'Roupas intimas',
            contact: 62985786960,
            category: Moda
        })
        await createSupplier.execute({
            name: 'Excelencia moda maior',
            contact: 62985786960,
            category: Moda
        })
        await createSupplier.execute({
            name: 'Navi',
            contact: 62985786960,
            category: Acessorios
        })
        await createSupplier.execute({
            name: 'Ninja das peliculas',
            contact: 62985786960,
            category: Acessorios
        })

        const sut = new ListAllSuppliers(inMemoryRepository)

        const suppliers = await sut.execute()
        expect(suppliers).toBeTruthy()

    })
})