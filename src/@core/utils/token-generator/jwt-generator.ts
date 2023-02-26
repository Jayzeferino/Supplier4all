import { TokenGenerator } from "../../domain/helper/token-generator";
import jwt from 'jsonwebtoken';


export class JwtGenerator implements TokenGenerator{
    constructor(private readonly secretKey: string){
        this.secretKey = secretKey
    }
    
    async generate(costumer_id: string): Promise<string | undefined> {
        if(!costumer_id){
            throw new Error("Id is null")
        }
        if(!this.secretKey){
            throw new Error("secret is null")
        }
        return jwt.sign({ costumer_id }, this.secretKey);
    }

}