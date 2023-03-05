import { MissingParameterError } from "../../utils/errors/missingParameterError"
import { Entity } from "../../core/domain/entity"

type CategoryProps={
    name: string
    createdAt?: Date
}

export class Category extends Entity<CategoryProps>{

    constructor(props: CategoryProps){
        super(props)
     }
 
     static create (props: CategoryProps):Category{
        if(!props?.name){
            throw new MissingParameterError("name is undefined")
        }
        const category = new Category({ ...props,
        createdAt: props?.createdAt ?? new Date()
        })
        
         return category
     }
}