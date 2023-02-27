import { CostumerModel } from "src/@core/dataLayer/models/costumer";
import { CostumerRepository } from "../../dataLayer/repository/CostumerRepository";

export default class InMemoryCostumerRepository implements CostumerRepository {

    public costumers: CostumerModel[] = []

    async save(costumer: CostumerModel): Promise<CostumerModel | undefined> {
        
        if(!costumer){
            throw new Error("Not is possible to create a new costumer")
            return;
        }
        this.costumers.push(costumer);
        return costumer;
               
    }
    async findById(id: string): Promise<CostumerModel | undefined> {

        const costumer = this.costumers.find(costumer => costumer.id === id) 
        if (!costumer) {
            throw new Error("costumer don't exists");
            return;
        }
        return costumer
    }

   async findall(): Promise<CostumerModel[] | null> {
        
       return this.costumers
   }

   async findByEmail(email: string): Promise<CostumerModel | undefined> {
    const costumer = await this.costumers.find(costumer => costumer.props.email === email)
    return costumer
   }

}