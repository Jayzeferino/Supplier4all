import { Costumer } from "../entities/Costumer";

export interface TokenGenerator{
    generate(costumer_id: string): Promise<string |undefined>
}