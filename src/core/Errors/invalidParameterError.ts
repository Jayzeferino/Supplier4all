 export class InvalidParameterError extends Error {
    public constructor(errormsg: string){
        super(errormsg)
        Object.setPrototypeOf(this,InvalidParameterError.prototype)
        this.name = "400"
        this.message = "Invalid Parameter Error"
    }
 }