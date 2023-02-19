import { FavoriteRepository } from "../../aplication/repository/FavoritesRepository";
import { Favorite } from "../../domain/entities/Favorite";

export default class InMemoryFavoritesRepository implements FavoriteRepository {

    public favorites: Favorite[] = []

    async save(favorite: Favorite): Promise<Favorite | undefined> {
        
        if(!favorite){
            throw new Error("Not is possible favorite ")
            return;
        }
    
        this.favorites.push(favorite);

        return favorite
               
    }

   async findall(): Promise<Favorite[] | null> {
        
       return this.favorites
   }


}