import { FavoriteRepository } from "../../../dataLayer/repository/FavoritesRepository";
import { Costumer } from "../../entities/Costumer";
import { Favorite } from "../../entities/Favorite";
import { Supplier } from "../../entities/Supplier";

export class ListFavorites {
    public constructor(private favoritesRepository: FavoriteRepository)
    {}
     async execute(costumer: Costumer){
        const favorites = await this.favoritesRepository.findAllOfACostumerFavoritesSupplier(costumer)
        
        if (!favorites){
            throw new Error("costumer don't have favorites");   
        }
        return favorites
    }
}