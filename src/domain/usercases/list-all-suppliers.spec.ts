import InMemorySupplierRepository from "../../infra/repository/in-memory-supplier- repository"
import { CreateSupplier } from "./create-supplier"
import { ListAllSuppliers } from "./list-all-suppliers"

describe('List Supplier User Case', ()=>{
    it('should be able list all suppliers', async ()=>{

        const inMemoryRepository = new InMemorySupplierRepository()
        const createSupplier = new CreateSupplier(inMemoryRepository)
        await createSupplier.execute({
            name: 'Navi',
            contact: 62985786960,
            email: 'exemplae@gmail.com'
        })
        await createSupplier.execute({
            name: 'Navi2',
            contact: 62985786960,
            email: 'exempla2e@gmail.com'
        })
        await createSupplier.execute({
            name: 'Navi4',
            contact: 62985786960,
            email: 'exempla4e@gmail.com'
        })

        const sut = new ListAllSuppliers(inMemoryRepository)

        const suppliers = await sut.execute()
        expect(suppliers).toBeTruthy()

    })
})