import { CostumerRepository } from "../../dataLayer/repository/CostumerRepository";
import { Costumer } from "../../domain/entities/Costumer";

export default class InMemoryCostumerRepository implements CostumerRepository {

    public costumers: Costumer[] = []

    async save(costumer: Costumer): Promise<Costumer | undefined> {
        
        if(!costumer){
            throw new Error("Not is possible to create a new Costumer")
            return;
        }
        this.costumers.push(costumer);
        return costumer;
               
    }
    async findById(id: string): Promise<Costumer | undefined> {

        const costumer = this.costumers.find(costumer => costumer.id === id) 
        if (!costumer) {
            throw new Error("Costumer don't exists");
            return;
        }
        return costumer
    }

   async findall(): Promise<Costumer[] | null> {
        
       return this.costumers
   }

   async findByEmail(email: string): Promise<Costumer | undefined> {
    const costumer = await this.costumers.find(costumer => costumer.props.email === email)
    return costumer
   }

}