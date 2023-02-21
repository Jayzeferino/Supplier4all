import { TokenGenerator } from "../../domain/helper/token-generator";
import jwt from 'jsonwebtoken';


export class JwtGenerator implements TokenGenerator{
    async generate(costumer_id: string): Promise<string | undefined> {
        if(!costumer_id){
            throw new Error("Id is null")
        }
        const secretKey: string = "gfg_jwt_secret_key"
        return jwt.sign({ costumer_id }, 'secretkey');
    }

}