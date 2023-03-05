import { SupplierModel } from "src/@core/dataLayer/models/supplier";
import { SuppliersRepository } from "../../dataLayer/repository/SuppliersRepository";

export default class InMemorySupplierRepository implements SuppliersRepository {
    public suppliers: SupplierModel[] = []

    save(supplier: SupplierModel): Promise<SupplierModel> {
       
        if(!supplier){
            throw new Error("Not is possible to create a new Supplier")
            return;
        }
        this.suppliers.push(supplier);
    
        return 
    }
   
    async findById(id: string): Promise<SupplierModel | undefined> {

        const supplier = this.suppliers.find(supplier => supplier.id === id) 
        if (!supplier) {
            throw new Error("Supplier don't exists");
            return;
        }
        return supplier
    }

   async findall(): Promise<SupplierModel[] | null> {
        
       return this.suppliers
   }

   async findByEmail(email: string): Promise<SupplierModel | undefined> {
        const supplier =  this.suppliers.find(supplier => supplier.props.email === email)
        return supplier
   }

   async findByCategory(category: string): Promise<SupplierModel[] | undefined> {
        const filterSuppliers = this.suppliers.filter(supplier => supplier.props.category?.props.name === category)
        return filterSuppliers
    }
}