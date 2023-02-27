import { FavoriteModel } from "src/@core/dataLayer/models/favorite";
import { FavoriteRepository } from "../../dataLayer/repository/FavoritesRepository";
import { CostumerModel } from "src/@core/dataLayer/models/costumer";
import { SupplierModel } from "src/@core/dataLayer/models/supplier";

export default class InMemoryFavoritesRepository implements FavoriteRepository {

    
    public favorites: FavoriteModel[] = []

    async save(favorite: FavoriteModel): Promise<FavoriteModel | undefined> {
        
        if(!favorite){
            throw new Error("Not is possible favorite ")
            return;
        }
    
        this.favorites.push(favorite);

        return favorite
               
    }

    async findAllOfACostumerFavoritesSupplier(costumer: CostumerModel): Promise<SupplierModel[] | null> {
        const favoList: SupplierModel[]=[]

        await this.favorites?.map((favorite)=>{
            if( favorite.props.costumer.id === costumer.id){
                favoList.push(favorite.props.supplier)
            }
        })

        return favoList
        
    }
    async findFavoSupplierByCostumerId(supplier: SupplierModel, costumer: CostumerModel): Promise<SupplierModel | undefined> {
        const listFavorite: SupplierModel[]= []
        await this.favorites?.map((favorite)=>{
            if( favorite.props.costumer.id === costumer.id && favorite.props.supplier.id===supplier.id){
                listFavorite.push(favorite.props.supplier)
            }
        })
        return listFavorite.pop()
    }


}