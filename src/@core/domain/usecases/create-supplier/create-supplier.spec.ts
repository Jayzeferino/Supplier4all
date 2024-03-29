import InMemoryCategoryRepository from "../../../infra/fakeRepositories/in-memory-category-repository"
import InMemorySupplierRepository from "../../../infra/fakeRepositories/in-memory-supplier- repository"
import { CreateCategory } from "../create-category/create-category"
import { CreateSupplier } from "./create-supplier"


describe('Create supplier user case', ()=>{
    it('should be able to create a new supplier', async ()=>{

        const inMemoryRepository = new InMemorySupplierRepository()
        const inMemoryCategoryRepo = new InMemoryCategoryRepository()
        const category = new CreateCategory(inMemoryCategoryRepo)
        const categorymock = await category.execute({
            name:"Acessorios para Celular"
        })

        const sut= new CreateSupplier(inMemoryRepository)

        await sut.execute({
            name: 'Navi',
            contact: 62985786960,
            category: categorymock
        })

        const supplier = inMemoryRepository.suppliers[inMemoryRepository.suppliers.length-1]
        
        expect(supplier).toHaveProperty('props.name','Navi');
        expect(supplier).toHaveProperty('props.contact',62985786960);
        expect(supplier).toHaveProperty('props.category',categorymock);
                
    })
    it('should be not be able to create a supplier with same name, contact', async ()=>{

        const inMemoryRepository = new InMemorySupplierRepository()
        const inMemoryCategoryRepo = new InMemoryCategoryRepository()
        const category = new CreateCategory(inMemoryCategoryRepo)
        const categorymock = await category.execute({
            name:"Acessorios para Celular"
        })

        const sut= new CreateSupplier(inMemoryRepository)

        await sut.execute({
            name: 'Navi',
            contact: 62985786960,
            category: categorymock
        })


        await sut.execute({
            name: 'Navi',
            contact: 62985786960,
            category: categorymock
        })

        const supplier = inMemoryRepository.suppliers[inMemoryRepository.suppliers.length-1]
        
        expect(supplier).toHaveProperty('props.name','Navi');
        expect(supplier).toHaveProperty('props.contact',62985786960);
        expect(supplier).toHaveProperty('props.category',categorymock);
                
    })
})