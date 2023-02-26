import { FavoriteRepository } from "../../dataLayer/repository/FavoritesRepository";
import { Costumer } from "../../domain/entities/Costumer";
import { Favorite } from "../../domain/entities/Favorite";
import { Supplier } from "../../domain/entities/Supplier";

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

    async findAllOfACostumerFavoritesSupplier(costumer: Costumer): Promise<Supplier[] | null> {
        const favoList: Supplier[]=[]

        await this.favorites?.map((favorite)=>{
            if( favorite.props.costumer.id === costumer.id){
                favoList.push(favorite.props.supplier)
            }
        })

        return favoList
        
    }
    async findFavoSupplierByCostumerId(supplier: Supplier, costumer: Costumer): Promise<Supplier | undefined> {
        const listFavorite: Supplier[]= []
        await this.favorites?.map((favorite)=>{
            if( favorite.props.costumer.id === costumer.id && favorite.props.supplier.id===supplier.id){
                listFavorite.push(favorite.props.supplier)
            }
        })
        return listFavorite.pop()
    }


}