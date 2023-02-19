 export class InvalidParameterError extends Error {
    public constructor(errormsg: string){
        super(`Invalid Param: ${errormsg}`)
        this.name = "InvalidParameterError"
    }
 }