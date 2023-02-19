import { FavoriteRepository } from "../../../aplication/repository/FavoritesRepository";

export class ListFavorites {
    public constructor(private favoritesRepository: FavoriteRepository)
    {}
     async execute(){
        const favorites = await this.favoritesRepository.findall()
        if (!favorites){
            throw new Error("don't exists favorites");
        }
        return favorites
    }
}