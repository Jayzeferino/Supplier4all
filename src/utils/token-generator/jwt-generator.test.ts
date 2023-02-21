import { JwtGenerator } from "./jwt-generator"

describe('Jwt generator token', ()=>{
    it('Should throw erro if id is null', async () => {
        const sut = new JwtGenerator()
        const token = sut.generate('')
        await expect(token).rejects.toThrow( new Error("Id is null"));
      })
    it('Should return token if jwt return token', async () => {
        const sut = new JwtGenerator()
        const token = await sut.generate('any_id')
        expect(token).toBeTruthy
    })
  })