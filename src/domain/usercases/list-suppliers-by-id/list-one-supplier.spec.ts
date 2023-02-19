import InMemoryCategoryRepository from "../../../dataLayer/fakeRepositories/in-memory-category-repository"
import InMemorySupplierRepository from "../../../dataLayer/fakeRepositories/in-memory-supplier- repository"
import { CreateCategory } from "../create-category/create-category"
import { CreateSupplier } from "../create-supplier/create-supplier"
import { ListOneSupplier } from "./list-one-supplier"


describe('Find One Supplier User Case', ()=>{
    it('should be able to find one supplier by ID', async ()=>{

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
        const {id} = await createSupplier.execute({
            name: 'Navi',
            contact: 62985786960,
            category: Acessorios
        })
        await createSupplier.execute({
            name: 'Ninja das peliculas',
            contact: 62985786960,
            category: Acessorios
        })

        const sut = new ListOneSupplier(inMemoryRepository)

        const supplier = await sut.execute({id})
        expect(supplier?.id).toBe(id)

    })
})