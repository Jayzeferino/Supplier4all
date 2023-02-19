import { Favorite } from "../../domain/entities/Favorite"

export interface FavoriteRepository{
    save(favorite: Favorite): Promise<Favorite | undefined>
    findall(): Promise<Favorite[]| null>
 }