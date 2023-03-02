import { CostumerModel } from "../models/costumer"


export interface CostumerRepository{
   save(costumer: CostumerModel): Promise<CostumerModel | undefined>
   findById(id: string): Promise<CostumerModel | undefined>
   findByEmail(email: string): Promise<CostumerModel | undefined>
   findall(): Promise<CostumerModel[]| null>
}