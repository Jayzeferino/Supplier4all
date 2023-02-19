import validator from 'validator';
import { emailIsValid } from './validations';

describe('Create supplier user case', ()=>{
    it('Should return true if validator returns true', async () => {
        const isEmailValid =  await emailIsValid('valid_email@mail.com')
        expect(isEmailValid).toBe(true)
      })
  })