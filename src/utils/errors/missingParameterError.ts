export class MissingParameterError extends Error {
    public constructor(errormsg: string){
        super(`Missing param: ${errormsg}`)
        this.name = "MissingParameterError"
    }
 }