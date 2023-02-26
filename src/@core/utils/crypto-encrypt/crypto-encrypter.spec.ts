import { CryptoEncrypter } from "./crypto-encrypter"

describe('Crypto encrypter', ()=>{

    it('should be encrypt the string', async ()=>{

        const password = "any_password"
        const encrypter = new CryptoEncrypter()
        const hash= await encrypter.hash(password)
        await expect(hash).not.toBe(password)
                
    })

    it('should be able to compare the hash to string', async () => { 
        const password = "any_password"
        const encrypter = new CryptoEncrypter()
        const hash= await encrypter.hash(password)
        const isValid = await encrypter.compare(password, hash)
        await expect(isValid).toBeTruthy()
    })
})