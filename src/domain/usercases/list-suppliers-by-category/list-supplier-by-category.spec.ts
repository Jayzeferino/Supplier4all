import InMemoryCategoryRepository from "../../../dataLayer/fakeRepositories/in-memory-category-repository"
import InMemorySupplierRepository from "../../../dataLayer/fakeRepositories/in-memory-supplier- repository"
import { CreateCategory } from "../create-category/create-category"
import { CreateSupplier } from "../create-supplier/create-supplier"
import { ListSupplierByCategory } from "./list-supplier-by-category"



describe('list suppliers by category', ()=>{
    it('should be able to list suppliers by category', async ()=>{

        const inMemorySupplierRepository = new InMemorySupplierRepository()
        const inMemoryCategoryRepo = new InMemoryCategoryRepository()
        const category = new CreateCategory(inMemoryCategoryRepo)

        // creation of categories
        const Acessorios = await category.execute({
            name:"Acessorios para Celular"
        })
        const Moda = await category.execute({
            name:"Moda"
        })
        // creation of suppliers
        const createSupplier = new CreateSupplier(inMemorySupplierRepository)
        await createSupplier.execute({
            name: 'Roupas intimas',
            contact: 62985786960,
            category: Moda
        })
         const response = await createSupplier.execute({
            name: 'Excelencia moda maior',
            contact: 62985786960,
            category: Moda
        })
        await createSupplier.execute({
            name: 'Navi',
            contact: 62985786923,
            category: Acessorios
        })
        await createSupplier.execute({
            name: 'Ninja das peliculas',
            contact: 62985786923,
            category: Acessorios
        })

        const sut = new ListSupplierByCategory(inMemorySupplierRepository)
        const suppliers = await sut.execute({
            category: Moda
        })
        console.log(suppliers)
        expect(suppliers).toBeTruthy()
    })
})