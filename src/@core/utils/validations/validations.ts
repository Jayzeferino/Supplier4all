
import { InvalidParameterError } from '../errors/invalidParameterError';
import Validator from 'validator';

export async function emailIsValid(email: string) {
    if(!email){
        throw new InvalidParameterError("email")
    }
   
    return Validator.isEmail(email)    
}
