import { checkPrime } from "crypto"
import { FavoriteRepository } from "../../../dataLayer/repository/FavoritesRepository"
import { Costumer } from "../../entities/Costumer"
import { Favorite } from "../../entities/Favorite"
import { Supplier } from "../../entities/Supplier"
import { InvalidParameterError } from "../../../utils/errors/invalidParameterError"


type FavorSupplierRequest = {
    supplier: Supplier
    costumer: Costumer
}

export class FavorSupplier{
    public constructor (private favoriteRepository:FavoriteRepository ){}
    
    async execute({supplier, costumer}:FavorSupplierRequest) {
        const duplicatedSupplier = await this.favoriteRepository.findFavoSupplierByCostumerId(supplier, costumer)
        if(duplicatedSupplier){
            throw new InvalidParameterError("Supplier aready favorite")
        }
        const favorSupplier= await Favorite.create({
            costumer: costumer,
            supplier: supplier
        })
        await this.favoriteRepository.save(favorSupplier)
        return favorSupplier
    }
}