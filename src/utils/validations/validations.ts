
import { MissingParameterError } from '../errors/missingParameterError';
import Validator from 'validator';

export class EmailValidator{
    public isValid (email: string){
        if(!email){
            throw new MissingParameterError("email")
        }
       
        return Validator.isEmail(email)
    }
}

// export class NameValidator{
//     static isValid (email: string){
//         if(!email){
//             throw new MissingParameterError("email")
//         }
//     }
// }