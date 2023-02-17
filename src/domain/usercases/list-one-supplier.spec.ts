import InMemorySupplierRepository from "../../infra/repository/in-memory-supplier- repository"
import { CreateSupplier } from "./create-supplier"
import { ListOneSupplier } from "./list-one-supplier"

describe('Find One Supplier User Case', ()=>{
    it('should be able to find one supplier by ID', async ()=>{

        const inMemoryRepository = new InMemorySupplierRepository()
        const createSupplier = new CreateSupplier(inMemoryRepository)
        const {id} = await createSupplier.execute({
            name: 'Navi',
            contact: 62985786960,
            email: 'exemplae23432@gmail.com'
        })
        await createSupplier.execute({
            name: 'Navi2',
            contact: 62985786960,
            email: 'exemplae2@gmail.com'
        })
        const sut = new ListOneSupplier(inMemoryRepository)

        const supplier = await sut.execute({id})
        expect(supplier?.id).toBe(id)

    })
})