import { Entity } from "../../core/domain/entity";
import { InvalidParameterError } from "../../utils/errors/invalidParameterError";
import { Costumer } from "./Costumer";
import { Supplier } from "./Supplier";

type FavoriteProps= {
    supplier: Supplier
    costumer: Costumer
}

export class Favorite extends Entity<FavoriteProps>{
    constructor(props: FavoriteProps){
        super(props)
     }

     static create (props: FavoriteProps): Favorite{

        if(!props.supplier && !props.costumer){
            throw new InvalidParameterError("Error to favorite a supplier - Undefined parameters")
        }
        const favorited = new Favorite({
            ...props
        })
        return favorited
     }
}