import { getMaxListeners } from "process"
import InMemorySupplierRepository from "../../infra/repository/in-memory-supplier- repository"
import { Supplier } from "../entities/Supplier"
import { CreateSupplier } from "./create-supplier"

describe('Create supplier user case', ()=>{
    it('should be able to create a new supplier', async ()=>{

        const inMemoryRepository = new InMemorySupplierRepository()


        const sut= new CreateSupplier(inMemoryRepository)

        const response = await sut.execute({
            name: 'Navi',
            contact: 62985786960,
            email: 'exemplae@gmail.com'
        })

        const supplier = inMemoryRepository.suppliers[inMemoryRepository.suppliers.length-1]
        
        expect(supplier).toHaveProperty('props.name','Navi');
        expect(supplier).toHaveProperty('props.contact',62985786960);
        expect(supplier).toHaveProperty('props.email','exemplae@gmail.com');

        
        
    })
})