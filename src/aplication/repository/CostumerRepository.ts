import { Costumer } from "../../domain/entities/Costumer"


export interface CostumerRepository{
   save(costumer: Costumer): Promise<Costumer | undefined>
   findById(id: string): Promise<Costumer | undefined>
   findByEmail(email: string): Promise<Costumer | undefined>
   findall(): Promise<Costumer[]| null>
}