import { CostumerModel } from "../models/costumer"
import { FavoriteModel } from "../models/favorite"
import { SupplierModel } from "../models/supplier"

export interface FavoriteRepository{
    save(favorite: FavoriteModel): Promise<FavoriteModel | undefined>
    findAllOfACostumerFavoritesSupplier(costumer: CostumerModel): Promise<SupplierModel[]| null>
    findFavoSupplierByCostumerId(supplier: SupplierModel,costumer: CostumerModel): Promise< SupplierModel | undefined> 
 }