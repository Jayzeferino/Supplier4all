import { Entity } from "../../core/domain/entity"

type CategoryProps={
    name: string
    createdAt?: Date
}

export class Category extends Entity<CategoryProps>{

    private constructor(props: CategoryProps){
        super(props)
     }
 
     static create (props: CategoryProps):Category{

        const category = new Category({ ...props,
        createdAt: props.createdAt ?? new Date()
        })
        
         return category
     }
}