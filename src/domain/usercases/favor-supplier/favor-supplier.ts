import { FavoriteRepository } from "../../../aplication/repository/FavoritesRepository"
import { Costumer } from "../../entities/Costumer"
import { Favorite } from "../../entities/Favorite"
import { Supplier } from "../../entities/Supplier"


type FavorSupplierRequest = {
    supplier: Supplier
    costumer: Costumer
}

export class FavorSupplier{
    public constructor (private favoriteRepository:FavoriteRepository ){}
    
    async execute({supplier, costumer}:FavorSupplierRequest) {
        const favorSupplier= Favorite.create({
            costumer: costumer,
            supplier: supplier
        })
        await this.favoriteRepository.save(favorSupplier)
        return favorSupplier
    }
}