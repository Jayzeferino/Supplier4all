
import crypto from 'crypto';
import { Encrypter } from '../../domain/helper/encrypter';


export class CryptoEncrypter  implements Encrypter{
    public password: string | undefined
    public hashedpassword: string | undefined
    public async compare(password: string, hashedPassword: string): Promise<boolean> {
        this.password= password
        this.hashedpassword= hashedPassword
        if (await this.hash(password) === hashedPassword) {
            return true
        }
        return false 
    }
    public async hash(password: string): Promise<string> {
        this.password = await crypto.createHash('sha256').update(password).digest('hex')
        return this.password
        
    }

}