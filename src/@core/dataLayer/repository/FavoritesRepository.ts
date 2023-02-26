import { Costumer } from "../../domain/entities/Costumer"
import { Favorite } from "../../domain/entities/Favorite"
import { Supplier } from "../../domain/entities/Supplier"

export interface FavoriteRepository{
    save(favorite: Favorite): Promise<Favorite | undefined>
    findAllOfACostumerFavoritesSupplier(costumer: Costumer): Promise<Supplier[]| null>
    findFavoSupplierByCostumerId(supplier: Supplier,costumer: Costumer): Promise< Supplier | undefined> 
 }